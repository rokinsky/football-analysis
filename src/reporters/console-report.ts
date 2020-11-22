import { OutputTarget } from "../summary";

export class ConsoleReport implements OutputTarget {
  async print(report: string): Promise<void> {
    console.log(report);
  }
}
