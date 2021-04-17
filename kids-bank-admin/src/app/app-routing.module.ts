import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ListAccountsComponent} from "./components/list-accounts/list-accounts.component";
import { AddAccountComponent} from "./components/add-account/add-account.component";
import {DetailsAccountComponent} from "./components/details-account/details-account.component";
import {OperationAccountComponent} from "./components/operation-account/operation-account.component";
import {LoginComponent} from "./components/login/login.component";
import {AuthGuard} from "./components/guards/auth.guard";

const routes: Routes = [
  { path: '', redirectTo: 'login', pathMatch: 'full' },
  { path: 'accounts', component: ListAccountsComponent, canActivate: [AuthGuard] },
  { path: 'add', component: AddAccountComponent },
  { path: 'details', component: DetailsAccountComponent },
  { path: 'operation', component: OperationAccountComponent },
  { path: 'login', component: LoginComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
