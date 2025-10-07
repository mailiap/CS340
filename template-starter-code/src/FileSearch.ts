import { FileProcessor } from "./FileProcessor";

class FileSearch extends FileProcessor {
  private searchRegExp: RegExp;
  private totalMatches: number = 0;
  private currentFileMatches: number = 0;

  constructor(
    dirName: string,
    filePattern: string,
    searchPattern: string,
    recurse: boolean = false
  ) {
    super(dirName, filePattern, recurse);
    this.searchRegExp = new RegExp(searchPattern);
  }

  protected override onFileStart(filePath: string): void {
    this.currentFileMatches = 0;
  }

  protected override processLine(filePath: string, line: string, _lineNum: number): void {
    if (this.searchRegExp.test(line)) {
      if (this.currentFileMatches === 0) {
        console.log(`\nFILE: ${filePath}`);
      }
      console.log(line);
      this.currentFileMatches++;
      this.totalMatches++;
    }
  }

  protected override onFileComplete(_filePath: string): void {
    if (this.currentFileMatches > 0) {
      console.log(`MATCHES: ${this.currentFileMatches}`);
    }
  }

  protected override onComplete(): void {
    console.log(`\nTOTAL MATCHES: ${this.totalMatches}`);
  }

  public static main(): void {
    let fileSearch: FileSearch;

    if (process.argv.length === 5) {
      fileSearch = new FileSearch(process.argv[2], process.argv[3], process.argv[4]);
    } else if (process.argv.length === 6 && process.argv[2].match("-r")) {
      fileSearch = new FileSearch(process.argv[3], process.argv[4], process.argv[5], true);
    } else {
      console.log("USAGE: npx ts-node src/FileSearch.ts {-r} <dir> <file-pattern> <search-pattern>");
      return;
    }

    fileSearch.run();
  }
}

FileSearch.main();
