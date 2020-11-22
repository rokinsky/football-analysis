import fs from "fs";
import { promisify } from "util";

import { OutputTarget } from "../summary";

const writeFile = promisify(fs.writeFile);

export class HtmlReport implements OutputTarget {
  async print(report: string): Promise<void> {
    const html = `
      <div>
        <h1>Analysis Output</h1>
        <div>${report}</div>
      </div>
    `;

    await writeFile("build/report.html", html);
  }
}
