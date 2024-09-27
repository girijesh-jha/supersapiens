
const fs = require("fs");
const env = process.argv[2];
if (!env) {
  console.log("Please specify an environment");
  process.exit(1);
}
fs.copyFileSync(`.env.${env}`, ".env");
console.log(`Environment set to ${env}`);

