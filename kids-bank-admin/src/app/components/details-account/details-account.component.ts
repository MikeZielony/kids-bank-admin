import { Component, OnInit, Input, OnChanges, Output, EventEmitter } from '@angular/core';
import { AccountService} from "../services/account.service";
import { Account} from "../../models/account.model";

@Component({
  selector: 'app-details-account',
  templateUrl: './details-account.component.html',
  styleUrls: ['./details-account.component.scss']
})

export class DetailsAccountComponent implements OnInit, OnChanges {
@Input() account: Account;
@Output() refreshList: EventEmitter<any> = new EventEmitter();
currentAccount: Account = null;
message = '';

  constructor(private accountService: AccountService) { }

  ngOnInit(): void {
    this.message = '';
  }

  ngOnChanges(): void {
    this.message = '';
    this.currentAccount = { ...this.account };
  }

  /*updatePublished(status): void {
    this.accountService.update(this.currentAccount.name, { published: status })
      .then(() => {
        this.currentAccount.balance = status;
        this.message = 'The status was updated successfully!';
      })
      .catch(err => console.log(err));
  }*/

  updateAccount(): void {
    const data = {
      name: this.currentAccount.name,
      balance: this.currentAccount.balance
    };

    this.accountService.update(this.currentAccount.name, data)
      .then(() => this.message = 'The account was updated successfully!')
      .catch(err => console.log(err));
  }

  deleteAccount(): void {
    this.accountService.delete(this.currentAccount.name)
      .then(() => {
        this.refreshList.emit();
        this.message = 'The account was updated successfully!';
      })
      .catch(err => console.log(err));
  }
}


