export abstract class Animal {
  name: string;
  trainingPriority: number;

  constructor(name: string, trainingPriority: number) {
    this.trainingPriority = trainingPriority;
    this.name = name;
  }

  static getSorted<T extends Animal>(animals: T[]): T[] {
    return [...animals].sort((a, b) => a.name.localeCompare(b.name));
  }

  static getTrainingPriorities<T extends Animal>(animals: T[]): string[] {
    return [...animals]
      .sort((a, b) => a.trainingPriority - b.trainingPriority)
      .map((animal) => animal.name);
  }
}

export class Cat extends Animal {
  constructor(name: string, trainingPriority: number) {
    super(name, trainingPriority);
  }
}

export class Dog extends Animal {
  constructor(name: string, trainingPriority: number) {
    super(name, trainingPriority);
  }
}

const cats = [
  new Cat("Whiskers", 3),
  new Cat("Mittens", 1),
  new Cat("Shadow", 2),
];

const dogs = [
  new Dog("Buddy", 2),
  new Dog("Rex", 1),
  new Dog("Charlie", 3),
];

console.log("Sorted Cats:", Animal.getSorted(cats));
console.log("Cat Training Priorities:", Animal.getTrainingPriorities(cats));

console.log("Sorted Dogs:", Animal.getSorted(dogs));
console.log("Dog Training Priorities:", Animal.getTrainingPriorities(dogs));
