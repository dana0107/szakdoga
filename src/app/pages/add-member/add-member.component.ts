import { FormComponent } from './../form/form.component';
import { AngularFirestore } from '@angular/fire/firestore';
import { Familymember } from './../../types/familymember';
import { AddmemberService } from './../../services/addmember.service';
import { Component, ViewChild, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { MatTableDataSource } from '@angular/material/table';
import { MatSort } from '@angular/material/sort';
import { MatPaginator } from '@angular/material/paginator';
import { Observable } from 'rxjs';
//import {BehaviorSubject} from 'rxjs/BehaviorSubject'
import { Subscription } from 'rxjs';
import { DataSource } from '@angular/cdk/collections';
import { analyzeAndValidateNgModules } from '@angular/compiler';
import { MatDialog } from '@angular/material/dialog';
import { MatDialogConfig } from '@angular/material/dialog';



@Component({
  selector: 'app-add-member',
  templateUrl: './add-member.component.html',
  styleUrls: ['./add-member.component.css']
})
export class AddMemberComponent implements OnInit {

  constructor(private addservice: AddmemberService, private firestore: AngularFirestore, public dialog: MatDialog) { }

  dataSource2!: MatTableDataSource<any>;

  ngOnInit() {
    this.getdata();
   this.dataSource2 = new MatTableDataSource<any>();
  }

  onCreate() {
    this.addservice.initializeFormGroup();
    const dialogConfig = new MatDialogConfig();
    dialogConfig.disableClose = true;
    dialogConfig.autoFocus = true;
    dialogConfig.width = "70%";
    this.dialog.open(FormComponent, dialogConfig);
  }

  @ViewChild(MatPaginator, { static: true }) paginator!: MatPaginator;
  @ViewChild(MatSort, { static: true }) sort!: MatSort;

  searchKey: string = "";
  data: any;

  

  

  filter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource2.filter = filterValue.trim().toLowerCase();
  }

  ngAfterViewInit() {
    this.dataSource2.paginator = this.paginator;
    this.dataSource2.sort = this.sort;
  }

  onSearchClear() {
    this.searchKey = "";
    this.applyFilter2();
  }

  applyFilter2() {
    this.dataSource2.filter = this.searchKey.trim().toLowerCase();
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource2.filter = filterValue.trim().toLowerCase();

    if (this.dataSource2.paginator) {
      this.dataSource2.paginator.firstPage();
    }
  }

  getdata() {
    this.addservice.getMemberList().subscribe((data: any[]) => {
      this.data = data;
      this.dataSource2.data = data;
    })
  }

  
  memberlist() {
    return this.addservice.getMembers();
  }


  editMember(row: any) {
   
    this.addservice.populate(row);


    const dialogConfig = new MatDialogConfig();
    dialogConfig.disableClose = true;
    dialogConfig.autoFocus = true;
    dialogConfig.width = "70%";
    this.dialog.open(FormComponent, dialogConfig);

  }

  // TODO : TEST
  

  // onEdit(row){
  //   this.service.populateForm(row);
  //   const dialogConfig = new MatDialogConfig();
  //   dialogConfig.disableClose = true;
  //   dialogConfig.autoFocus = true;
  //   dialogConfig.width = "60%";
  //   this.dialog.open(EmployeeComponent,dialogConfig);
  // }

  deleteMember(id: string) {
    this.addservice.delete('members', id);
    this.getdata();
    console.log('torles');
  }

  displayedColumns: string[] = ['lastname', 'firstname', 'birthyear', 'birthplace', 'actions'];


  selectedValue = "";
  csaladtagtipus = "";



  onClear() {
    this.addservice.addmemberform.reset();
  }


  submit() {
    let data = this.addservice.addmemberform.value;
    this.addservice.add("members", data).then(res => {
      this.onClear();

    });

  }
}
