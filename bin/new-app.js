#! /usr/bin/env node
console.log("with ♥ by Agustin Quetto. Enjoy!");

const execSync = require("child_process").execSync;
const args = process.argv.slice(2, process.argv.length).reduce((prev, curr) => {
  prev[curr.split("=")[0]] = curr.split("=")[1];
  return prev;
}, {});

const name = args.name || "new-app";
const method = args.method || "ssh";
const https_prefix = "https://github.com/";
const ssh_prefix = "git@github.com:";

const prefix = method === "ssh" ? ssh_prefix : https_prefix;

execSync(
  `git clone ${prefix}AgustinQuetto/baseapp-backend-express-passport.git ${name}-backend && rm -rf ${name}-backend/.git`
);

execSync(
  `git clone ${prefix}AgustinQuetto/baseapp-frontend-next-passport.git ${name}-frontend && rm -rf ${name}-frontend/.git`
);

console.log(
  "Projects cloned! Please, run 'npm install' in each folder and setup your .env ♥ Enjoy!"
);

process.exit(0); // 0 means there were no errors
