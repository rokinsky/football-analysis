import { MatchData } from "./match-data";

export interface Analyzer {
  run(matches: MatchData[]): string;
}

export interface OutputTarget {
  print(report: string): void;
}

export class Summary {
  constructor(private _analyzer: Analyzer, private _reporter: OutputTarget) {}

  buildAndReport(matches: MatchData[]): void {
    const output = this._analyzer.run(matches);
    this._reporter.print(output);
  }
}
