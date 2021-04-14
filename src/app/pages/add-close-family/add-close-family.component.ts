import { Component, OnInit } from '@angular/core';
import { AddmemberService } from './../../services/addmember.service';
import { AngularFirestore } from '@angular/fire/firestore';
@Component({
  selector: 'app-add-close-family',
  templateUrl: './add-close-family.component.html',
  styleUrls: ['./add-close-family.component.css']
})
export class AddCloseFamilyComponent implements OnInit {

  constructor(private addservice: AddmemberService, private firestore: AngularFirestore,) { }

  ngOnInit(): void {
  }

  

}
