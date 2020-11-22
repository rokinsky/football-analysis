import { MatchData } from "./match-data";
import { MatchResult } from "./match-result";

interface DataReader {
  read(): void;
  data: string[][];
}

export class MatchReader {
  private _matches: MatchData[] = [];

  constructor(private _reader: DataReader) {}

  async load(): Promise<void> {
    await this._reader.read();
    this._matches = this._reader.data.map(
      (row: string[]): MatchData => {
        return [
          new Date(row[0]),
          row[1],
          row[2],
          parseInt(row[3]),
          parseInt(row[4]),
          (row[5] as unknown) as MatchResult,
          row[6],
        ];
      }
    );
  }

  get matches(): MatchData[] {
    return this._matches;
  }
}
