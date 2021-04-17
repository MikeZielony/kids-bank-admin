import { LoginComponent} from "../components/login/login.component";
import {Observable} from "rxjs";
import firebase from "firebase/app";



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
