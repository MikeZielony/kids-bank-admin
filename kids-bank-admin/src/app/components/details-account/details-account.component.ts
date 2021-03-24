import {Component, OnInit, Input, OnChanges, Output, EventEmitter} from '@angular/core';
import {AccountService} from "../services/account.service";
import {Account} from "../../models/account.model";
import {Operation} from "../../models/operation";
import firebase from "firebase";

@Component({
  selector: 'app-details-account',
  templateUrl: './details-account.component.html',
  styleUrls: ['./details-account.component.scss']
})

export class DetailsAccountComponent implements OnInit, OnChanges {
  @Input()
  account: Account;

  @Output()
  refreshList: EventEmitter<any> = new EventEmitter();
  currentAccount: Account = null;
  message = '';

  constructor(private accountService: AccountService) {
  }

  ngOnInit(): void {
    this.message = '';
  }

  ngOnChanges(): void {
    this.message = '';
    this.currentAccount = {...this.account};
  }

  checkIsMoney(): boolean {
    return (+this.currentAccount.balance + +this.currentAccount.operation) >= 0;
  }

  updateAccount(): void {
    let bal = +this.currentAccount.balance;
    let operation: Operation = new Operation(this.currentAccount.operationName,this.currentAccount.operation)
    console.log(this.currentAccount);
    const data = {
      operations: [operation,...this.currentAccount.operations], // if this.currentAccount == [] {[operatio]}
      name: this.currentAccount.name,
      balance: (+this.currentAccount.balance + +(this.currentAccount.operation)).toFixed(2),
      cardId: this.currentAccount.cardId,
    };

    if(this.checkIsMoney()){
    this.accountService.update(this.currentAccount.key, data)
      .then(() => this.message = 'The account was updated successfully!')
      .catch(err => console.log(err));
    this.refreshList.emit();
  }else{

      setTimeout(function(){ alert('You have only : ' + bal + ' PLN!'); }, 0);
      this.refreshList.emit();}
  }

  deleteAccount(): void {
    this.accountService.delete(this.currentAccount.key)
      .then(() => {
        this.refreshList.emit();
        this.message = 'The account was deleted successfully!';
      })
      .catch(err => console.log(err));
  }
}


