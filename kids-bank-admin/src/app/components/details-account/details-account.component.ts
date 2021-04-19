import {Component, OnInit, Input, OnChanges, Output, EventEmitter} from '@angular/core';
import {AccountService} from "../services/account.service";
import {Account} from "../../models/account.model";
import {Operation} from "../../models/operation";
import {registerLocaleData} from '@angular/common';
import localePl from '@angular/common/locales/pl';

registerLocaleData(localePl, 'pl');
import {Category} from "../../models/operation";
import {LoginComponent} from "../login/login.component";
import {AngularFireAuth} from "@angular/fire/auth";
import {from} from 'rxjs';
import {take} from 'rxjs/operators';


@Component({
  selector: 'app-details-account',
  templateUrl: './details-account.component.html',
  styleUrls: ['./details-account.component.css']
})


export class DetailsAccountComponent implements OnInit, OnChanges {

  @Input()
  account: Account;

  @Output()
  refreshList: EventEmitter<any> = new EventEmitter();
  currentAccount: Account = null;
  message = '';
  owner: string

  constructor(private accountService: AccountService, public afAuth: AngularFireAuth) {
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
    from(this.afAuth.currentUser).pipe(take(1)).subscribe(userData => {
      let bal = +this.currentAccount.balance;
      let operation: Operation = new Operation(this.currentAccount.operationName, this.currentAccount.operation, userData.displayName)
      if (!this.checkIsMoney()) {
        setTimeout(function () {
          alert('You have only : ' + bal + ' PLN!');
        }, 0);
        return;
      }
      const data = {
        operations: [operation, ...this.currentAccount.operations], // if this.currentAccount == [] {[operatio]}
        name: this.currentAccount.name,
        balance: (+this.currentAccount.balance + +(this.currentAccount.operation)).toFixed(2),
        cardId: this.currentAccount.cardId,
        owner: userData.displayName
      };
      this.accountService.update(this.currentAccount.key, data)
        .then(() => this.message = 'The account was updated successfully!')
        .catch(err => console.log(err));
      this.refreshList.emit();
    })
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


