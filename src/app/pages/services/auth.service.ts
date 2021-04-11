import { AngularFireAuth } from '@angular/fire/auth';

import { Injectable } from '@angular/core';
import {Subject} from 'rxjs';
import { User } from './user.model';
import { AuthData } from './auth-data.model';
import {Router} from '@angular/router';


@Injectable({
  providedIn: 'root'
})

export class AuthService {
  authChange = new Subject<boolean>();
  public isAuthenticated = false;
  constructor(private router: Router,public firebaseAuth:AngularFireAuth){}

  registerUser(authdata : AuthData){
    this.firebaseAuth.createUserWithEmailAndPassword(authdata.email,authdata.password)
    .then(result => {
      console.log(result);
      this.authSuccessfully();
    })
    .catch(error => {
      console.log(error);
    });
  }

  login(authData: AuthData) {
    this.firebaseAuth
      .signInWithEmailAndPassword(authData.email, authData.password)
      .then(result => {
        console.log(result);
        this.authSuccessfully();
      })
      .catch(error => {
        console.log(error);
      });
  }

  logout() {
    this.firebaseAuth.signOut();
    this.authChange.next(false);
    this.router.navigate(['/login']);
    this.isAuthenticated = false;
  }

  private authSuccessfully() {
    this.isAuthenticated = true;
    this.authChange.next(true);
    this.router.navigate(['/welcome']);
  }
}
