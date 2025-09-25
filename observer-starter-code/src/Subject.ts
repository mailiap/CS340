import { Observer } from "./Observer";

export abstract class Subject {
  private observers: Observer[] = [];

  attachObserver(observer: Observer): void {
    this.observers.push(observer);
  }

  notifyObservers(flight: any): void {
    for (const observer of this.observers) {
      observer.update(flight);
    }
  }
}
