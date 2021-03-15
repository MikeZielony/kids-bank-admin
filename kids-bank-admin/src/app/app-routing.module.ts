import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ListAccountsComponent} from "./components/list-accounts/list-accounts.component";
import { AddAccountComponent} from "./components/add-account/add-account.component";
import {DetailsAccountComponent} from "./components/details-account/details-account.component";
import {OperationAccountComponent} from "./components/operation-account/operation-account.component";

const routes: Routes = [
  { path: '', redirectTo: 'accounts', pathMatch: 'full' },
  { path: 'accounts', component: ListAccountsComponent },
  { path: 'add', component: AddAccountComponent },
  { path: 'details', component: DetailsAccountComponent },
  { path: 'operation', component: OperationAccountComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
