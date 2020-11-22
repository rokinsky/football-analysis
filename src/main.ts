import { WinsAnalysis } from "./analyzers/wins-analysis";
import { CsvFileReader } from "./csv-file-reader";
import { MatchReader } from "./match-reader";
import { ConsoleReport } from "./reporters/console-report";
import { Summary } from "./summary";

const bootstrap = async () => {
  const matchReader = new MatchReader(new CsvFileReader("football.csv"));
  await matchReader.load();
  const summary = new Summary(
    new WinsAnalysis("Man United"),
    new ConsoleReport()
  );
  summary.buildAndReport(matchReader.matches);
};

bootstrap().catch(console.error);
