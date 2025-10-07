import { FileProcessor } from "./FileProcessor";

class LineCount extends FileProcessor {
  private totalLineCount: number = 0;

  protected processLine(_filePath: string, _line: string, _lineNum: number): void {
    this.totalLineCount++;
  }

  protected override onFileComplete(filePath: string, lineCount: number): void {
    console.log(`${lineCount} ${filePath}`);
  }

  protected override onComplete(): void {
    console.log(`TOTAL: ${this.totalLineCount}`);
  }

  public static main(): void {
    let lineCount: LineCount;

    if (process.argv.length === 4) {
      lineCount = new LineCount(process.argv[2], process.argv[3]);
    } else if (process.argv.length === 5 && process.argv[2].match("-r")) {
      lineCount = new LineCount(process.argv[3], process.argv[4], true);
    } else {
      console.log("USAGE: npx ts-node src/LineCount.ts {-r} <dir> <file-pattern>");
      return;
    }

    lineCount.run();
  }
}

LineCount.main();
