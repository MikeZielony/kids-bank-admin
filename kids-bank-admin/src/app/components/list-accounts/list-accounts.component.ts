import { Component, OnInit } from '@angular/core';
import { AccountService} from "../services/account.service";
import { map } from 'rxjs/operators';
import 'firebase/auth';
import 'firebase/storage';
import 'firebase/firestore';

@Component({
  selector: 'app-list-accounts',
  templateUrl: './list-accounts.component.html',
  styleUrls: ['./list-accounts.component.scss']
})
export class ListAccountsComponent implements OnInit {

  accounts: any;
  currentAccount = null;
  currentIndex = -1;
  title = '';

  constructor(private accountService: AccountService) { }

  ngOnInit(): void {
    this.retrieveAccounts();
  }

  refreshList(): void {
    this.currentAccount = null;
    this.currentIndex = -1;
    this.retrieveAccounts();
  }

  retrieveAccounts(): void {
    this.accountService.getAll().snapshotChanges().pipe(
      map(changes => (
        changes.map(c =>
          ({ key: c.payload.key, ...c.payload.val() })
      ))
      )
    ).subscribe(data => {
      this.accounts = data;
    });
  }

  setActiveAccount(tutorial, index): void {
    this.currentAccount = tutorial;
    this.currentIndex = index;
  }

  removeAllAccounts(): void {
    this.accountService.deleteAll()
      .then(() => this.refreshList())
      .catch(err => console.log(err));
  }
}
