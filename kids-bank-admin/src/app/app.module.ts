import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { FilePickerModule } from  'ngx-awesome-uploader';

import { AngularFireModule } from '@angular/fire';

import { environment } from '../environments/environment';
import {LOCALE_ID} from '@angular/core';
import { AppRoutingModule} from "./app-routing.module";
import { AppComponent } from './app.component';
import { DetailsAccountComponent } from './components/details-account/details-account.component';
import { AddAccountComponent } from './components/add-account/add-account.component';
import { ListAccountsComponent } from './components/list-accounts/list-accounts.component';
import { LoginComponent } from './components/login/login.component';

@NgModule({
  declarations: [
    AppComponent,
    DetailsAccountComponent,
    AddAccountComponent,
    ListAccountsComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    AngularFireModule.initializeApp(environment.firebase),
    FilePickerModule,
  ],
  providers: [{
    provide: LOCALE_ID,
    useValue: 'pl'
  }],
  bootstrap: [AppComponent]
})
export class AppModule { }
