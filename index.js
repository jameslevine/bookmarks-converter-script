const { bookmarksToJSON } = require("./src");
const fs = require("fs");
const [htmlBookmarks] = process.argv.slice(2);
const content = fs.readFileSync(htmlBookmarks, "utf-8");
const options = {
  formatJSON: true, // return prettified JSON - false by default
  spaces: 2, // number of spaces to use for indentation - 2 by default
};
fs.writeFileSync("bookmarks.json", bookmarksToJSON(content, options));
