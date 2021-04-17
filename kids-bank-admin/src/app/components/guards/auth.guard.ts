import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree } from '@angular/router';
import {AngularFireAuth} from "@angular/fire/auth";
import { LoginComponent} from "../login/login.component";

@Injectable({
  providedIn: 'root'
})

export class AuthGuard implements CanActivate {


 login: LoginComponent;

  constructor(
    private afAuth: AngularFireAuth//,  private service: AuthMailService
  ) { }

  async canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Promise<boolean | UrlTree> {
    const user = await this.afAuth.currentUser;
    const isAuthenticated = user ? true : false;

   /* this.authMailResults = this.authMailResults.filter((authMail: AuthMailModel) => {
      if (isAuthenticated && user.email === this.authMail.mail) {
        return isAuthenticated;
      }
      alert('You must be authenticated in order to access this page');
    }
  )*/

    if (isAuthenticated && user.uid === 'NoldnUgHvSUpH7ueDNE4pnEYDIf2') {
      return isAuthenticated;
    }
    alert('You must be authenticated in order to access this page');
  }
}
