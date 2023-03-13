import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
    providedIn: 'root'
})

export class ApiService {

    private apiUrl = 'http://localhost:5000/api/newApi';

    constructor(
        private http: HttpClient
    ) { }

    getUsers() {
        return this.http.get(this.apiUrl);
    }

}


