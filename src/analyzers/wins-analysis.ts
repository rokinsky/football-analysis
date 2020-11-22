import { MatchData } from "../match-data";
import { MatchResult } from "../match-result";
import { Analyzer } from "../summary";

export class WinsAnalysis implements Analyzer {
  constructor(private _team: string) {}

  async run(matches: MatchData[]): Promise<string> {
    const mapWins = (match: MatchData): number => {
      const homeWin =
        match[1] === this._team && match[5] === MatchResult.HOME_WIN;
      const awayWin =
        match[2] === this._team && match[5] === MatchResult.AWAY_WIN;
      return homeWin || awayWin ? 1 : 0;
    };

    const sumWins = (acc: number, curr: number): number => acc + curr;

    const wins = matches.map(mapWins).reduce(sumWins, 0);

    return `Team ${this._team} won ${wins} games`;
  }
}
