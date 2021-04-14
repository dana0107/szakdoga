// import { Component } from '@angular/core';  
// import {ServiceService} from './service.service';  
// import { FormGroup, FormControl, Validators } from '@angular/forms';
// import { MatTableModule } from '@angular/material/table';
// import { MatTableDataSource } from '@angular/material/table';
// import { MatPaginator } from '@angular/material/paginator';
// import { MatSort } from '@angular/material/sort';
// import { ViewChild } from '@angular/core';
// @Component({  
//   selector: 'app-root',  
//   templateUrl: './app.component.html',  
//   styleUrls: ['./app.component.css']  
// })  
// export class AppComponent {  
//   title = 'EmployeeFE';  
     
//   constructor(private ServiceService: ServiceService) { }  
//   data: any;  
//   EmpForm: FormGroup;  
//   submitted = false;   
//   EventValue: any = "Save";  
//   public dataSource = new MatTableDataSource<any>()
//   displayedColumns: string[] = [
//     "eId",
//     "eName",
//     "eAddress",
//     "eAge",
//     "editAction",
//     "deleteAction"
//   ];

//   @ViewChild(MatPaginator, { static: true }) paginator: MatPaginator;
//   @ViewChild(MatSort, { static: true }) sort: MatSort;

//   ngOnInit(): void {  
//     this.getdata();  

//     this.EmpForm = new FormGroup({  
//       eId: new FormControl(null),  
//       eName: new FormControl("",[Validators.required]),        
//       eAddress: new FormControl("",[Validators.required]),  
//       eEmail:new FormControl("",[Validators.required]),  
//       eAge: new FormControl("",[Validators.required]),  
//     })    
//   }

//   ngAfterViewInit() {
//     this.dataSource.paginator = this.paginator;
//     this.dataSource.sort = this.sort;
//   }

//   applyFilter(event: Event) {
//     const filterValue = (event.target as HTMLInputElement).value;
//     this.dataSource.filter = filterValue.trim().toLowerCase();

//     if (this.dataSource.paginator) {
//       this.dataSource.paginator.firstPage();
//     }
//   }

//   getdata() {  
//     this.ServiceService.getData().subscribe((data: any[]) => {  
//       this.data = data;
//       this.dataSource.data = data;
//     })  
//   }  


// } 