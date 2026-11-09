// Live-edit mode: npm run ds:local
// Links this site to your local design system folder so edits show up instantly.
// package.json is not changed; run `npm install` to go back to the pinned release.
import { execSync } from "node:child_process";
import { existsSync } from "node:fs";
import { resolve } from "node:path";

const path = resolve(process.env.DS_PATH || "../unBloched-Vue-Template");
if (!existsSync(resolve(path, "nuxt.config.ts"))) {
  console.error(`No design system found at ${path}. Set DS_PATH=/path/to/folder`);
  process.exit(1);
}

execSync(`npm install --no-save "${path}"`, { stdio: "inherit" });
console.log(`\nLinked to ${path}. Restart the dev server. Run "npm install" to unlink.`);
