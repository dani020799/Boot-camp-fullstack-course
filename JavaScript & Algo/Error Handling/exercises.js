const fs = require("fs");

function safeJsonParse(input) {
  try {
    return JSON.parse(input);
  } catch (error) {
    return "Invalid JSON format";
  }
}

function readFileWithErrorHandling(path, callback) {
  fs.readFile(path, "utf8", (err, data) => {
    if (err) {
      if (err.code === "ENOENT") {
        callback(`File not found: ${path}`);
      } else if (err.code === "EISDIR") {
        callback(`Expected a file but found a directory: ${path}`);
      } else {
        callback(`File read error: ${err.message}`);
      }
      return;
    }

    callback(`Success: File read successfully. Size: ${Buffer.byteLength(data, "utf8")} bytes`);
  });
}

function main() {
  console.log(safeJsonParse('{"name":"John"}'));
  console.log(safeJsonParse("invalid json"));

  readFileWithErrorHandling("existing.txt", (result) => {
    console.log(result);
  });

  readFileWithErrorHandling("missing.txt", (result) => {
    console.log(result);
  });

  readFileWithErrorHandling("t.txt", (result) => {
    console.log(result);
  });
  readFileWithErrorHandling("folder", (result) => {
    console.log(result);
  });
}

main();