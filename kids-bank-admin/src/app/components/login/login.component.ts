import { Component, OnInit } from '@angular/core';
import { AngularFireAuth } from "@angular/fire/auth";
import { Router } from '@angular/router';
import firebase from 'firebase/app';
import { AuthMailService} from "../services/auth-mail.service";
import {AuthMailModel} from "../../models/authMail.model";
import {map, take} from "rxjs/operators";
import {Observable} from "rxjs";
import {IAuthMailResultDto} from "../../models/AuthMailResult.dto";
import {HttpClient} from "@angular/common/http";





@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit{

  authMail: AuthMailModel;
  authMailResults: AuthMailModel[] = [];
  isAuthenticated = false;


  constructor(public afAuth: AngularFireAuth, public router: Router ) { }

 ngOnInit() {
   // this.loadData();
 }

  signIn() {
    const googleAuthProvider = new firebase.auth.GoogleAuthProvider();
    this.afAuth.signInWithPopup(googleAuthProvider);
    this.checkUser().then(res => {
      console.log(res)
    })
  }

  signOut() {
    this.afAuth.signOut();
   this.router.navigate(['login']);
  }


  async checkUser() {
    const user = await this.afAuth.currentUser;
    console.log(user.uid);

    console.log(this.authMailResults);
    this.authMailResults = this.authMailResults.filter(data => {
        if (user.email === this.authMail.mail) {

          return this.isAuthenticated = true;
        }
        alert('You must be authenticated in order to access this page');
    });
}
  /*public loadData(): void {
    this.getAuthMail()
      .pipe(
        take(1)
      )
      .subscribe(results => {
        this.authMailResults = results;
      });
  }*/

  /*public getAuthMail(): Observable<AuthMailModel[]> {
    return this.http.get<IAuthMailResultDto[]>('kids-bank-admin/src/assets/jsons/mails.json')
      .pipe(
        map(results => results.map(result => new AuthMailModel(result)))
      );
  }*/

}
