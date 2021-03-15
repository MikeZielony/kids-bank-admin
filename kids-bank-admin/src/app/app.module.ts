import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AngularFireModule } from '@angular/fire';

import { environment } from '../environments/environment';

import { AppRoutingModule} from "./app-routing.module";
import { AppComponent } from './app.component';
import { DetailsAccountComponent } from './components/details-account/details-account.component';
import { AddAccountComponent } from './components/add-account/add-account.component';
import { ListAccountsComponent } from './components/list-accounts/list-accounts.component';
import { OperationAccountComponent } from './components/operation-account/operation-account.component';

@NgModule({
  declarations: [
    AppComponent,
    DetailsAccountComponent,
    AddAccountComponent,
    ListAccountsComponent,
    OperationAccountComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    AngularFireModule.initializeApp(environment.firebase),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
