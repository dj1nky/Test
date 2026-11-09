// Pulls the newest design system release: npm run update-ds
import { execSync } from "node:child_process";

const repo = "dj1nky/unBloched-Vue-Template";
const tags = execSync(`git ls-remote --tags https://github.com/${repo}.git`, {
  encoding: "utf8",
})
  .split("\n")
  .map(line => line.match(/refs\/tags\/(v\d+\.\d+\.\d+)$/)?.[1])
  .filter(Boolean)
  .sort((a, b) => {
    const [x, y] = [a, b].map(v => v.slice(1).split(".").map(Number));
    return x[0] - y[0] || x[1] - y[1] || x[2] - y[2];
  });

const latest = tags.at(-1);
if (!latest) {
  console.error("No releases found on GitHub.");
  process.exit(1);
}

console.log(`Installing design system ${latest}`);
execSync(`npm install unbloched-design-system@github:${repo}#${latest}`, {
  stdio: "inherit",
});
