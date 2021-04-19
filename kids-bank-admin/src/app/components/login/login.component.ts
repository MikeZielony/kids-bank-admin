import {Component} from '@angular/core';
import {AngularFireAuth} from "@angular/fire/auth";
import {Router} from '@angular/router';
import firebase from 'firebase/app';
import {AuthMailModel} from "../../models/authMail.model";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  authMail: AuthMailModel;
  authMailResults: AuthMailModel[] = [];
  isAuthenticated = false;
  isVisible = true;


  constructor(public afAuth: AngularFireAuth, public router: Router) {
  }

  signIn(): void {
    const googleAuthProvider = new firebase.auth.GoogleAuthProvider();
    this.afAuth.signInWithPopup(googleAuthProvider).then(() => this.router.navigate(['accounts']));
  }

  signOut(): void {
    this.afAuth.signOut();
    this.router.navigate(['login']);
  }
}
