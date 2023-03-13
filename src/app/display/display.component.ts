import { Component, OnInit } from '@angular/core';
import { HttpHeaders, HttpClient } from '@angular/common/http';
//import { catchError, map } from 'rxjs/operators';
//import { throwError } from 'rxjs';
import{ApiService} from '../api.service'
import * as apiservice from '../api.service'

@Component({
  selector: 'app-display',
  templateUrl: './display.component.html',
  styleUrls: ['./display.component.css']
})


export class DisplayComponent implements OnInit {
  private apiUrl = 'http://localhost:5000/api/newApi';
  public empData: any= []

  ngOnInit(): void {
    this.apiService.getUsers().subscribe((response: any) => {this.empData = response; });
  }

  constructor(public apiService : ApiService , private http: HttpClient){

  }
 
  deleteuser(empData: any) {
  
    const options = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
      }),
      body: { "EmpID": empData.EmpId }
    }
    this.http.delete(this.apiUrl, options).subscribe((response: any) => {
      this.apiService.getUsers().subscribe((response: any) => {this.empData = response; });
      console.log(response)
    });
  }

}


