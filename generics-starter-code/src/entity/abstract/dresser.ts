type Socks = { style: string; color: string };
type Shirt = { style: string; size: string };
type Pants = { waist: number; length: number };

class Drawer<T> {
  private items: T[] = [];

  get isEmpty(): boolean {
    return this.items.length === 0;
  }

  addItem(item: T): void {
    this.items.push(item);
  }

  removeItem(): T | undefined {
    return this.items.pop();
  }

  removeAll(): T[] {
    const allItems = [...this.items];
    this.items = [];
    return allItems;
  }
}

class Dresser<TTop, TMiddle, TBottom> {
  public top: Drawer<TTop>;
  public middle: Drawer<TMiddle>;
  public bottom: Drawer<TBottom>;

  constructor() {
    this.top = new Drawer<TTop>();
    this.middle = new Drawer<TMiddle>();
    this.bottom = new Drawer<TBottom>();
  }
}

function startDresser(): void {
  const myDresser = new Dresser<Socks, Shirt, Pants>();

  myDresser.top.addItem({ style: "ankle", color: "black" });
  myDresser.middle.addItem({ style: "t-shirt", size: "M" });
  myDresser.bottom.addItem({ waist: 32, length: 30 });

  console.log("Top drawer empty?", myDresser.top.isEmpty);
  console.log("Removed item from middle:", myDresser.middle.removeItem());
  console.log("Removed all from bottom:", myDresser.bottom.removeAll());
}

startDresser();
