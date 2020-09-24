const fs = require("fs");
const path = require("path");

class Cronus {
	constructor(...args) {
		this.path = path.join.apply(null, args);
		if (!fs.existsSync(this.path)) throw new Error(`File does not exist at ${this.path}`);
		this.data = JSON.parse(fs.readFileSync(this.path));
	}
	save(data = null) {
		if (data) this.data = data;
		fs.writeFileSync(this.path, JSON.stringify(this.data));
	}
}

module.exports = Cronus;
