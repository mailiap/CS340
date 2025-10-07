import * as fs from "fs";
import * as path from "path";

export abstract class FileProcessor {
  protected dirName: string;
  protected fileRegExp: RegExp;
  protected recurse: boolean;

  constructor(dirName: string, filePattern: string, recurse: boolean = false) {
    this.dirName = dirName;
    this.fileRegExp = new RegExp(filePattern);
    this.recurse = recurse;
  }

  public async run(): Promise<void> {
    await this.processDirectory(this.dirName);
    this.onComplete();
  }

  private async processDirectory(dirPath: string): Promise<void> {
    if (!this.isDirectory(dirPath)) {
      this.nonDirectory(dirPath);
      return;
    }

    if (!this.isReadable(dirPath)) {
      this.unreadableDirectory(dirPath);
      return;
    }

    const files = fs.readdirSync(dirPath);

    for (const file of files) {
      const fullPath = path.join(dirPath, file);
      if (this.isFile(fullPath) && this.isReadable(fullPath)) {
        await this.processFile(fullPath);
      }
    }

    if (this.recurse) {
      for (const file of files) {
        const fullPath = path.join(dirPath, file);
        if (this.isDirectory(fullPath)) {
          await this.processDirectory(fullPath);
        }
      }
    }
  }

  private async processFile(filePath: string): Promise<void> {
    if (!this.fileRegExp.test(filePath)) return;

    try {
      const fileContent = await fs.promises.readFile(filePath, "utf-8");
      const lines = fileContent.split(/\r?\n/);

      this.onFileStart(filePath);

      for (let i = 0; i < lines.length; i++) {
        this.processLine(filePath, lines[i], i + 1);
      }

      this.onFileComplete(filePath, lines.length);
    } catch (error) {
      this.unreadableFile(filePath);
    }
  }

  protected abstract processLine(filePath: string, line: string, lineNum: number): void;

  protected onFileStart(_filePath: string): void {}
  protected onFileComplete(_filePath: string, _lineCount: number): void {}
  protected onComplete(): void {}

  protected isDirectory(p: string): boolean {
    try {
      return fs.statSync(p).isDirectory();
    } catch {
      return false;
    }
  }

  protected isFile(p: string): boolean {
    try {
      return fs.statSync(p).isFile();
    } catch {
      return false;
    }
  }

  protected isReadable(p: string): boolean {
    try {
      fs.accessSync(p, fs.constants.R_OK);
      return true;
    } catch {
      return false;
    }
  }

  protected nonDirectory(dirName: string): void {
    console.log(`${dirName} is not a directory`);
  }

  protected unreadableDirectory(dirName: string): void {
    console.log(`Directory ${dirName} is unreadable`);
  }

  protected unreadableFile(fileName: string): void {
    console.log(`File ${fileName} is unreadable`);
  }
}
