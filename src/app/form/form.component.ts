import { Component, OnInit } from '@angular/core';
import { HttpHeaders, HttpClient } from '@angular/common/http';
import { NgForm } from '@angular/forms';
import { FormGroup, FormControl } from '@angular/forms';
import { AfterViewInit, ElementRef } from '@angular/core';
import{ApiService} from '../api.service'


@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {
  private apiUrl = 'http://localhost:5000/api/newApi';
  public empData: any= []
  public body: any;
 
  constructor(public apiService : ApiService, private http: HttpClient){
    
  }


  ngOnInit(): void {
  }

  registerUser(form: NgForm) {
   // this.apiService.getUsers().subscribe((response: any) => {this.empData = response; });

    this.body = JSON.stringify(form.value);
    let headers = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json'
      })
    }
    console.log(this.empData)

    if (this.empData.find((item: any) => item.EmpId == this.body.EmpId)) {
      console.log(this.body);
      this.http.put(this.apiUrl, this.body, headers).subscribe(response => console.log(response));
    } else {
      console.log(this.body);
      this.http.post(this.apiUrl, this.body, headers).subscribe(response => console.log(response));
    }

  }


  ngAfterViewInit() {

  }
}
