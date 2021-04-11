import { MemberService } from './../services/member.service';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl,Validators} from '@angular/forms';
import {MatTableDataSource} from '@angular/material/table';



interface Member {
  value: string;
  viewValue: string;
}


@Component({
  selector: 'app-add-member',
  templateUrl: './add-member.component.html',
  styleUrls: ['./add-member.component.css']
})




export class AddMemberComponent implements OnInit {

  
  
  constructor( private memservice:MemberService) { }
  
  

  selectedValue="";
  csaladtagtipus="";

  members : Member[]=[
    {value: '1', viewValue: 'Édesapa'},
    {value: '2', viewValue: 'Édesanya'},
    
    {value: '11', viewValue: 'Apai nagyapa'},
    {value: '12', viewValue: 'Apai nagyanya'},

    {value: '21', viewValue: 'Anyai nagyapa'},
    {value: '22', viewValue: 'Anyai nagyanya'},

    {value: '02', viewValue: 'Lánytestvér'},
    {value: '01', viewValue: 'Fiútestvér'},

    {value: '001', viewValue: 'Lány gyermek'},
    {value: '002', viewValue: 'Fiú gyermek'},



  ];
  
  ngOnInit(): void {
    //this.memservice.getEmployee();
  }


  

  form: FormGroup = new FormGroup({
    lastname: new FormControl(''),
    firstname: new FormControl(''),
    birthyear: new FormControl(''),
    birthplace: new FormControl(''),
    member: new FormControl(''),
    whosmember:new FormControl(''),
    alive: new FormControl(false),
    gender: new FormControl(''),
    
    
  });
  onClear(){
    this.form.reset();
  }

  
  
  submit(form: FormGroup ){
    console.log("alma");
  }
}