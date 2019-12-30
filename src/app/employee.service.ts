import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {
  domain = 'https://org-manager-app.herokuapp.com/';
  constructor(private http: HttpClient) {

  }

  save = (formvalues) => {
    const url = `${this.domain}employees`;
    return this.http.post(url, formvalues);
  }

  getById = (id) => {
    const url = `${this.domain}employees/${id}`;
    return this.http.get(url);
  }

  getAll = () => {
    const url = `${this.domain}employees`;
    return this.http.get(url);
  }

  update = (id, formValues) => {
    const url = `${this.domain}employees/${id}`;
    return this.http.put(url, formValues);
  }
}
