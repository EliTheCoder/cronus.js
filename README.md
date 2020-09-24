# cronus.js

A Node.js library for editing JSON files

## Usage

```javascript
const Cronus = require("cronus.js");

let users = new Cronus(__dirname, "users.js");
users.data.jimmy = {height: 10, age: 9};
users.save();
```
