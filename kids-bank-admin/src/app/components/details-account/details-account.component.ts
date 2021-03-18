import {Component, OnInit, Input, OnChanges, Output, EventEmitter} from '@angular/core';
import {AccountService} from "../services/account.service";
import {Account} from "../../models/account.model";

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
    const data = {
      name: this.currentAccount.name,
      balance: +this.currentAccount.balance + +(this.currentAccount.operation),
      cardId: this.currentAccount.cardId,
    };
    if(this.checkIsMoney()){
    this.accountService.update(this.currentAccount.key, data)
      .then(() => this.message = 'The account was updated successfully!')
      .catch(err => console.log(err));
    this.refreshList.emit();
  }else{

      setTimeout(function(){ alert("no money"); }, 0);
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


