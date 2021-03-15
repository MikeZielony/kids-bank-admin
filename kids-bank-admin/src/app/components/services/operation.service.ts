import { Injectable } from '@angular/core';
import { AngularFireDatabase, AngularFireList } from '@angular/fire/database';
import { Operation} from "../../models/operation";
import {Account} from "../../models/account.model";

@Injectable({
  providedIn: 'root'
})
export class OperationService {

  private dbPath = '/';

  operationsRef: AngularFireList<Operation> = null;

  constructor(private db: AngularFireDatabase) {
    this.operationsRef = db.list(this.dbPath);
  }

  getAll(): AngularFireList<Operation> {
    return this.operationsRef;
  }

  create(operation: Operation): any {
    return this.operationsRef.push(operation);
  }

  update(key: string, value: any): Promise<void> {
    return this.operationsRef.update(key, value);
  }
}
