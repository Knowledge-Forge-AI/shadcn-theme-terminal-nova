"use strict";

const path = require("path");
const { NativePreflightError, runNativeBuildPreflight } = require("./native-build-preflight-lib.cjs");

const projectRoot = path.resolve(__dirname, "..");

try {
  module.exports = runNativeBuildPreflight({
    projectRoot,
    getCacheEntries: () => Object.keys(require.cache),
  });
} catch (error) {
  const phase = error instanceof NativePreflightError ? error.phase : "unknown";
  process.stderr.write(`CTTN_NATIVE_ADMISSION_REFUSED ${phase}\n`);
  process.exit(2);
}
