import fs from "fs";
import { promisify } from "util";

const readFile = promisify(fs.readFile);

export class CsvFileReader {
  private _data: string[][] = [];
  constructor(private _filename: string) {}

  async read(): Promise<void> {
    const file = await readFile(this._filename, {
      encoding: "utf-8",
    });
    this._data = file
      .split("\n")
      .map((row: string): string[] => row.split(","));
  }

  get data(): string[][] {
    return this._data;
  }
}
