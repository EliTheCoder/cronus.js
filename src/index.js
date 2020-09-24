const fs = require("fs");
const path = require("path");

class Cronus {
	constructor(dirname, file_path) {
		if (!file_path) throw new Error("No file path was specified");
		this.path = path.join(dirname, file_path);
		if (!fs.existsSync(this.path)) throw new Error("File does not exist");
		this.data = JSON.parse(fs.readFileSync(this.path));
	}
	save(data = null) {
		if (data) this.data = data;
		fs.writeFileSync(this.path, JSON.stringify(this.data));
	}
}

module.exports = Cronus;
