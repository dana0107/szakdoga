import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { AngularFirestore } from '@angular/fire/firestore';
import { Familymember } from './../../types/familymember';
import { AddmemberService } from './../../services/addmember.service';
import { MatDialogRef } from '@angular/material/dialog';
import * as _ from 'lodash';

interface Member {
  value: string;
  viewValue: string;
}
@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {

  constructor(public addservice: AddmemberService, private firestore: AngularFirestore, public dialogRef: MatDialogRef<FormComponent>) { }

  ngOnInit(): void {
    this.addservice.getMembers();
  }
  
  members: Member[] = [
    { value: '21', viewValue: 'Édesapa' },
    { value: '22', viewValue: 'Édesanya' },

    { value: '12', viewValue: 'Lánytestvér' },
    { value: '11', viewValue: 'Fiútestvér' },

    { value: '1', viewValue: 'Lány gyermek' },
    { value: '2', viewValue: 'Fiú gyermek' },
  ];

  // addmemberform = new FormGroup({
  //   id: new FormControl(null),
  //   lastname: new FormControl(''),
  //   firstname: new FormControl(''),
  //   birthyear: new FormControl(''),
  //   birthplace: new FormControl(''),
  //   member: new FormControl(''),
  //   whosmember: new FormControl(''),
  //   alive: new FormControl(false),
  //   gender: new FormControl(''),
  // });


  // initializeFormGroup() {
  //   this.addmemberform.setValue({
  //     id: null,
  //     lastname: '',
  //     firstname: '',
  //     birthyear: '',
  //     birthplace: '',
  //     member: '',
  //     whosmember: '',
  //     alive: false,
  //     gender: '1',

  //   });
  // }




  onClear() {
    this.addservice.addmemberform.reset();
    this.addservice.initializeFormGroup();

  }

  submit() {
    if (!this.addservice.addmemberform.get('id')?.value) {
      let data = this.addservice.addmemberform.value;
      this.addservice.add('members',this.addservice.addmemberform.value);
      // this.addservice.add("members", data).then(res => {
      //   this.onClear();
      // });
    } else {
      let data = this.addservice.addmemberform.value;
      this.addservice.update('members', this.addservice.addmemberform.get('id')?.value, this.addservice.addmemberform.value)
    }
    this.addservice.addmemberform.reset();
    this.addservice.initializeFormGroup();
    this.onClose();

  }

  onClose() {
    this.addservice.addmemberform.reset();
    this.addservice.initializeFormGroup();
    this.dialogRef.close();
  }
}
