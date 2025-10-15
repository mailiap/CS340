
// 1. What is the biggest design principle violation in the code below.
	// Don’t Repeat Yourself (DRY) Principle: It repeats the same parsing and validation logic for each property making hard to maintain.
// 2. Refactor the code to improve its design.

type Dictionary = {
	[index: string]: string
}

type Times = {
	interval: number;
	duration: number;
	departure: number;
};

function getTimes(props: Dictionary): Times {
  const interval = parsePositiveProp(props, "interval");
  const duration = parsePositiveProp(props, "duration", interval);
  const departure = parsePositiveProp(props, "departure", interval);

  return { interval, duration, departure };
}

function parsePositiveProp(props: Dictionary, key: string, multipleOf?: number): number {
  const valueString = props[key];
  if (!valueString) throw new Error(`missing ${key}`);

  const value = parseInt(valueString);
  if (value <= 0) throw new Error(`${key} must be > 0`);
  if (multipleOf && value % multipleOf !== 0) throw new Error(`${key} % interval != 0`);

  return value;
}