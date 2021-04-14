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

  constructor(private addservice: AddmemberService, private firestore: AngularFirestore,public dialog: MatDialog) {}

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
  
  @ViewChild(MatPaginator, { static: true }) paginator!: MatPaginator;
  @ViewChild(MatSort, { static: true }) sort!: MatSort;

  searchKey: string = "";
  data: any;

  public dataSource2 = new MatTableDataSource<any>();

  applyFilterr(event: Event) {
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

  ngOnInit() {
    this.getdata();
  }

  memberlist() {
    return this.addservice.getMembers();
  }

  editMember(row:string) {
    // this.addservice.populateForm(row);
    // const dialogConfig = new MatDialogConfig();
    // dialogConfig.disableClose = true;
    // dialogConfig.autoFocus = true;
    // dialogConfig.width = "60%";
    // this.dialog.open(EmployeeComponent,dialogConfig);
   }

  deleteMember(id:string) {
    this.addservice.delete('members',id);
    this.getdata();
    console.log('torles');
  }

  displayedColumns: string[] = ['lastname', 'firstname', 'birthyear', 'birthplace', 'actions'];


  selectedValue = "";
  csaladtagtipus = "";

  members: Member[] = [
    { value: '21', viewValue: 'Édesapa' },
    { value: '22', viewValue: 'Édesanya' },

    { value: '12', viewValue: 'Lánytestvér' },
    { value: '11', viewValue: 'Fiútestvér' },

    { value: '1', viewValue: 'Lány gyermek' },
    { value: '2', viewValue: 'Fiú gyermek' },
  ];

  onClear() {
    this.addmemberform.reset();
  }


  submit() {
    let data = this.addmemberform.value;
    this.addservice.add("members", data).then(res => {
      this.onClear();

    });

  }
}
