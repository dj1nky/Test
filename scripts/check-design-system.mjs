// Warns when the design system is behind the newest release.
// Runs before dev/build. Never fails: offline or errors are silent.
import { execSync } from "node:child_process";
import { readFileSync } from "node:fs";

const repo = "dj1nky/vue-nuxt-design-system";
const toNums = v => v.slice(1).split(".").map(Number);
const cmp = (a, b) => {
  const [x, y] = [a, b].map(toNums);
  return x[0] - y[0] || x[1] - y[1] || x[2] - y[2];
};
const readJson = path => {
  try {
    return JSON.parse(readFileSync(path, "utf8"));
  } catch {
    return null;
  }
};

try {
  const pkg = readJson("package.json");
  const pin =
    pkg?.dependencies?.["unbloched-design-system"]?.match(
      /#(v\d+\.\d+\.\d+)$/
    )?.[1];
  if (!pin) process.exit(0); // e.g. a local file: link

  // Where the design system is pinned, locked and actually installed.
  const sources = {
    "package.json": pin,
    "package-lock.json":
      readJson("package-lock.json")?.packages?.[
        "node_modules/unbloched-design-system"
      ]?.version,
    node_modules: readJson("node_modules/unbloched-design-system/package.json")
      ?.version,
  };
  const versions = Object.entries(sources)
    .filter(([, v]) => v)
    .map(([source, v]) => ({
      source,
      version: v.startsWith("v") ? v : `v${v}`,
    }));

  const latest = execSync(
    `git ls-remote --tags https://github.com/${repo}.git`,
    { encoding: "utf8", timeout: 5000, stdio: ["ignore", "pipe", "ignore"] }
  )
    .split("\n")
    .map(line => line.match(/refs\/tags\/(v\d+\.\d+\.\d+)$/)?.[1])
    .filter(Boolean)
    .sort(cmp)
    .at(-1);
  if (!latest) process.exit(0);

  const detail = list => list.map(v => `${v.source}: ${v.version}`).join(", ");
  const behind = versions.filter(v => cmp(v.version, latest) < 0);
  if (behind.length) {
    console.warn(
      `\n\x1b[33m⚠ Design system is outdated (${detail(behind)}); ${latest} is available.\n  Run: npm run update-ds\x1b[0m\n`
    );
  } else if (new Set(versions.map(v => v.version)).size > 1) {
    console.warn(
      `\n\x1b[33m⚠ Design system versions are out of sync (${detail(versions)}).\n  Run: npm install\x1b[0m\n`
    );
  }
} catch {
  // Offline or git unavailable: skip the check.
}
