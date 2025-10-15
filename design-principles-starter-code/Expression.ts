
// 1. What design principles does this code violate?
	// Single Responsibility Principle (SRP): The function mixes multiple rules into one big conditional.
// 2. Refactor the code to improve its design.

function isLowRiskClient(score: number, income: number, authorized: boolean): boolean {
  return hasHighScore(score) || hasMediumScoreAndIncome(score, income, authorized) || hasHighIncome(income);
}

function hasHighScore(score: number): boolean {
  return score > 700;
}

function hasMediumScoreAndIncome(score: number, income: number, authorized: boolean): boolean {
  return score > 500 && income >= 40000 && income <= 100000 && authorized;
}

function hasHighIncome(income: number): boolean {
  return income > 100000;
}

