const os = require("os");

// 1kb = 1024 bytes
// 1mb = 1024kb
// 1gb = 1024mb

console.log("free RAM", os.freemem() / 1024 / 1024 / 1024); // To check the how much RAM memory is free

console.log("Total RAM", os.totalmem() / 1024 / 1024 / 1024); // To check the total RAM

console.log("Version", os.version());

console.log("cpu", os.cpus());
