import { Injectable } from '@angular/core';
import {CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, Router} from '@angular/router';
import {AngularFireAuth} from "@angular/fire/auth";
import { LoginComponent} from "../login/login.component";

@Injectable({
  providedIn: 'root'
})

export class AuthGuard implements CanActivate {


 login: LoginComponent;

  constructor(
    private afAuth: AngularFireAuth, private router: Router//,  private service: AuthMailService
  ) { }

  async canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Promise<boolean | UrlTree> {
    const user = await this.afAuth.currentUser;
    const isAuthenticated = user ? true : false;
    const acceptedUID = ['NoldnUgHvSUpH7ueDNE4pnEYDIf2', 'zXz3u2uGPCWZrGM45XqLHEkcGt53'];

   /* this.authMailResults = this.authMailResults.filter((authMail: AuthMailModel) => {
      if (isAuthenticated && user.email === this.authMail.mail) {
        return isAuthenticated;
      }
      alert('You must be authenticated in order to access this page');
    }
  )*/

    if (isAuthenticated && acceptedUID.includes(user.uid)) {
    return isAuthenticated
  }alert('You must be authenticated with correct account in order to access this page');

}
}

