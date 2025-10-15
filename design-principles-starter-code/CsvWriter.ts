
// 1. Explain why/how this program violates the Single Responsibility Principle
	// This class is doing too much. It's trying to figure out how to format the CSV text, like where to put commas and quotes, and actually printing that text to the console.
// 2. Explain how you would refactor the program to improve its design.
	// One class would be just to format CSV data into a string and the other class would handle writing it somewhere, like printing it out or saving it.

export class CsvWriter {

	public write(lines: string[][] ) {
		for (let i = 0; i < lines.length; i++)
			this.writeLine(lines[i]);
	}

	private writeLine(fields: string[]) {
		if (fields.length == 0)
			console.log();
		else {
			this.writeField(fields[0]);

			for (let i = 1; i < fields.length; i++) {
				console.log(",");
				this.writeField(fields[i]);
			}
			console.log();
			
		}
	}

	private writeField(field: string) {
		if (field.indexOf(',') != -1 || field.indexOf('\"') != -1)
			this.writeQuoted(field);
		else
			console.log(field);
	}

	private writeQuoted(field: string) {
		console.log('\"');
		for (let i = 0; i < field.length; i++) {
			let c: string = field.charAt(i);
			if (c == '\"')
				console.log("\"\"");
			else
				console.log(c);
		}
		console.log('\"');
	}
}
