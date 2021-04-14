import { Familymember } from './../types/familymember';
import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { Observable, of } from 'rxjs';
import { AngularFirestore, CollectionReference, Query, AngularFirestoreDocument } from '@angular/fire/firestore';
import { switchMap, map } from 'rxjs/operators';
import { User } from 'src/app/types/user';
import { Router } from '@angular/router';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Subject } from 'rxjs';
import { MatTableDataSource } from '@angular/material/table';
import * as _ from 'lodash';


@Injectable({
  providedIn: 'root'
})
export class AddmemberService {

  constructor(private firestore: AngularFirestore) { }
  finishedExercisesChanged = new Subject<Familymember[]>();
  // createMember(data: any) {
  //   return new Promise<any>((res, reject) => {
  //     this.firestore
  //       .collection("members")
  //       .add(data)
  //       .then(res => { }, err => reject(err));
  //   });
  // }
  

  addmemberform = new FormGroup({
    id: new FormControl(null),
    lastname: new FormControl(''),
    firstname: new FormControl(''),
    birthyear: new FormControl(''),
    birthplace: new FormControl(''),
    member: new FormControl(''),
    whosmember: new FormControl(''),
    alive: new FormControl(false),
    gender: new FormControl(''),
  });


  initializeFormGroup() {
    this.addmemberform.setValue({
      id: null,
      lastname: '',
      firstname: '',
      birthyear: '',
      birthplace: '',
      member: '',
      whosmember: '',
      alive: false,
      gender: '1',

    });
  }

  populate(valaki: any) {
    this.addmemberform.patchValue(_.omit(valaki));
  }

  create_NewStudent(record: any) {
    return this.firestore.collection('Students').add(record);
  }

  read_Students() {
    return this.firestore.collection('Students').snapshotChanges();
  }

  update_Student(recordID: string, record: any) {
    this.firestore.doc('Students/' + recordID).update(record);
  }

  delete_Student(record_id: string) {
    this.firestore.doc('Students/' + record_id).delete();
  }

  getUserDoc(id: string) {
    return this.firestore
      .collection('user-collection')
      .doc(id)
      .valueChanges()
  }

  getUserList() {
    return this.firestore
      .collection("user-collection")
      .snapshotChanges();
  }

  createUser(user: User) {
    return new Promise<any>((resolve, reject) => {
      this.firestore
        .collection("user-collection")
        .add(user)
        .then(response => { console.log(response) }, error => reject(error));
    });
  }

  // deleteUser(id:string) {
  //   return this.firestore
  //     .collection("user-collection")
  //     .doc(user.id)
  //     .delete();
  // }

  async add(collectionName: string, data: any, id?: string): Promise<string> {
    const uid = id ? id : this.firestore.createId();
    data.id = uid;
    await this.firestore.collection(collectionName).doc(uid).set(data);
    return uid;
  }

  async update(collectionName: string, id: string, data: any): Promise<string> {
    await this.firestore.collection(collectionName).doc(id).update(data);
    return id;
  }

  async delete(collectionName: string, id: string): Promise<string> {
    await this.firestore.collection(collectionName).doc(id).delete();
    return id;
  }

  get(collectionName: string): Observable<Familymember[]> {
    return this.firestore.collection(collectionName, ref => {
      let query: CollectionReference | Query = ref;
      query = query.orderBy('title', 'asc');
      return query;
    }).valueChanges() as Observable<Familymember[]>;
  }




  // getMembers3(){
  //   this.firestore.collection('members').valueChanges().subscribe((members: Familymember[]) => {
  //     this.finishedExercisesChanged.next(members);
  //   });
  // }


  // getMembers(): Observable<Familymember[]>{
  //   return this.firestore.collection('members').valueChanges() as Observable<Familymember[]>;
  // }

  getMembers(): Observable<Familymember[]> {
    return this.firestore.collection('members').valueChanges() as Observable<Familymember[]>;
  }


  // valami:any;
  // getMembers2(){
  //   this.valami = this.firestore.collection('members').valueChanges();
  //   return this.valami;
  // }
  // getSlice(){
  //   return this.getMembers2().slice();
  // }


  getMemberList() {
    return this.firestore
      .collection('members')
      .valueChanges();
  }



  getById(collectionName: string, id: string): Observable<any> {
    return this.firestore.collection(collectionName).doc(id).valueChanges();
  }


}
