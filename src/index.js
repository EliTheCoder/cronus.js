const fs = require("fs");
const path = require("path");

class Cronus {
	constructor(file_path) {
		if (!file_path) throw new Error("No file path was specified");
		this.path = file_path;
		if (!fs.existsSync(path.join(__dirname, file_path))) throw new Error("File does not exist");
		this.data = JSON.parse(fs.readFileSync(path.join(__dirname, path)));
	}
	save(data = null) {
		if (data) this.data = data;
		fs.writeFileSync(fs.readFileSync(path.join(__dirname, path)), JSON.stringify(this.data));
	}
}

module.exports = Cronus;
