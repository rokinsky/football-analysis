import { OutputTarget } from "../summary";

export class ConsoleReport implements OutputTarget {
  print(report: string) {
    console.log(report);
  }
}
