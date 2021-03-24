export class Operation {
  date: Date;
  name: string;
  amount: number;

  constructor(name: string, amount: number) {
    this.date = new Date();
    this.name = name;
    this.amount = amount;
  }
}
