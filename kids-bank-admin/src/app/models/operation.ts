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
export enum Category {
  zabawka = 0,
  edukacja = 1,
  rozrywka = 2,
  jedzenie
}
