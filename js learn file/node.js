const fs = request("node:fs")

fs.readFile("aa/sample.txt", "utf8", (err, data) => {
  if (err) {
    console.error("Error reading file:", err)
    return
  }
  console.log("File content:", data)
})