
// 1. What design principle(s) does this code violate?
	// This class is doing two big jobs. Its representing the data/model for a course, like name and credits. It also is handling database operations, like creating, finding, and updating.
// 2. Explain how you would refactor this code to improve its design.
	// Keep Course as a plain data model and move the database stuff into a separate class.

export class Course {

	name: string;
	credits: number;

	// Mock "database"
	private static database: Course[] = [];

	constructor(name: string, credits: number) {
		this.name = name;
		this.credits = credits;
	}

	static async create(name: string, credits: number): Promise<Course> {

		// ... Code to insert a new Course object into the database ...

		const course = new Course(name, credits);
		Course.database.push(course);
		console.log(`Created course: ${course.name} (${course.credits} credits)`);
		return course;
	}

	static async find(name: string): Promise<Course | undefined> {

		// ... Code to find a Course object in the database ...

		const course = Course.database.find(c => c.name === name);
		if (course) {
			console.log(`Found course: ${course.name} (${course.credits} credits)`);
		} else {
			console.log(`Course not found: ${name}`);
		}
		return course;
	}

	async update(): Promise<void> {

		// ... Code to update a Course object in the database ...

		const index = Course.database.findIndex(c => c.name === this.name);
		if (index !== -1) {
			Course.database[index] = this;
			console.log(`Updated course: ${this.name} (${this.credits} credits)`);
		} else {
			console.log(`Course not found, cannot update: ${this.name}`);
		}
	}
}
