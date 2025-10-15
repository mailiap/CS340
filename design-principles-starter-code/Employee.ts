
// 1. Explain how this program violates the High-Quality Abstraction principle.
	// The class depends on low-level details of Employee.
// 2. Explain how you would refactor the code to improve its design.
	// Move calculations like years of service and months in the last position into the Employee class, so that RetirementCalculator can operate using high-level methods without knowing the raw data.

class Employee {
	public employmentStartDate: Date;
	public employmentEndDate: Date;
}

class RetirementCalculator {
	private employee: Employee;

	public constructor(emp: Employee) {
		this.employee = emp;
	}

	public calculateRetirement(payPeriodStart: Date, payPeriodEnd: Date): number { … }

	private getTotalYearsOfService(startDate: Date, endDate: Date): number { … }

	private getMonthsInLastPosition(startDate: Date, endDate: Date): number { … }
	
    ...
}
