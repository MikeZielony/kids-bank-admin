import { Injectable } from '@angular/core';
import { AngularFireDatabase, AngularFireList } from '@angular/fire/database';
import { Account} from "../../models/account.model";

@Injectable({
  providedIn: 'root'
})
export class AccountService {

  private dbPath = '/';

  accountsRef: AngularFireList<Account> = null;

  constructor(private db: AngularFireDatabase) {
    this.accountsRef = db.list(this.dbPath);
  }

  getAll(): AngularFireList<Account> {
    return this.accountsRef;
  }

  create(account: Account): any {
    return this.accountsRef.push(account);
  }

  update(key: string, value: any): Promise<void> {
    return this.accountsRef.update(key, value);
  }

  delete(key: string): Promise<void> {
    return this.accountsRef.remove(key);
  }

  deleteAll(): Promise<void> {
    return this.accountsRef.remove();
  }
}
