import { MatchReader } from "./match-reader";
import { Summary } from "./summary";

const bootstrap = async () => {
  const matchReader = MatchReader.fromCsv("football.csv");
  const summary = Summary.winsAnalysisWithConsoleReport("Man United");

  await matchReader.load();
  await summary.buildAndReport(matchReader.matches);
};

bootstrap().catch(console.error);
