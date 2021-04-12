import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { Observable, of } from 'rxjs';
import {AngularFirestore,AngularFirestoreDocument} from '@angular/fire/firestore';
import { switchMap, map } from 'rxjs/operators';
import { User } from 'src/app/types/user';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AddmemberService {

  constructor() { }
}
