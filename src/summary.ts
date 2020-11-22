import { WinsAnalysis } from "./analyzers/wins-analysis";
import { MatchData } from "./match-data";
import { ConsoleReport } from "./reporters/console-report";
import { HtmlReport } from "./reporters/html-report";

export interface Analyzer {
  run(matches: MatchData[]): Promise<string>;
}

export interface OutputTarget {
  print(report: string): Promise<void>;
}

export class Summary {
  constructor(private _analyzer: Analyzer, private _reporter: OutputTarget) {}

  static winsAnalysisWithHtmlReport(team: string): Summary {
    return new Summary(new WinsAnalysis(team), new HtmlReport());
  }

  static winsAnalysisWithConsoleReport(team: string): Summary {
    return new Summary(new WinsAnalysis(team), new ConsoleReport());
  }

  async buildAndReport(matches: MatchData[]): Promise<void> {
    const output = await this._analyzer.run(matches);
    await this._reporter.print(output);
  }
}
