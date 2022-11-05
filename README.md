# bookmarks-converter-script

bookmarks-converter-script is a no-dependecy, Regex-based pure JS cli script that takes in the HTML-style code of the bookmarks files exported by browsers like Chrome and Firefox, and converts them into JSON / JS object format with a recursive tree structure.

Bookmarks, folders and subfolders are nested using a `children` property on the folders.

This code was adapted from [zorapeteri's Github repo](https://github.com/zorapeteri/bookmarks-to-json)

It stores the latest bbookmarks version locally and uses this for future comparisons.

## Example JSON output

```json
bookmarks.json

[
  {
    "type": "link",
    "addDate": 1630524312,
    "title": "GitHub",
    "url": "https://github.com/"
  },
  {
    "type": "folder",
    "addDate": 1630524192,
    "lastModified": 1630524211,
    "title": "Bookmarks bar",
    "children": [
      {
        "type": "link",
        "addDate": 1630524211,
        "title": "Lettuce",
        "url": "https://www.youtube.com/watch?v=M9PAXeKHw7Q"
      }
    ]
  }
]
```

## CLI Use-cases

For all use-cases, git clone this project and `npm i`

1. Convert HTML to JSON



```js
$~ node index.js <path-to-bookmarks-file>
```

Output saved to project root as bookmarks.json

1. Merge 2 bookmark files together

`npm i bookmarks-converter-script`

```js
$~ node index.js <path-to-bookmarks-file>
```
