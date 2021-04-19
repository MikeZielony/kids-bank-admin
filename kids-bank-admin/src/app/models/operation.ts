export class Operation {
  date: Date;
  name: string;
  amount: number;
  owner: string;

  constructor(name: string, amount: number, owner: string) {
    this.date = new Date();
    this.name = name;
    this.amount = amount;
    this.owner = owner;
  }
}

export enum Category {
  zabawka = 0,
  edukacja = 1,
  rozrywka = 2,
  jedzenie
}
