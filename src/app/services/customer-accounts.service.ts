import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, map } from 'rxjs';
import { CustomerModel } from '../models/customer.model';

@Injectable({
  providedIn: 'root',
})
export class CustomerAccountsService {
  constructor(private http: HttpClient) {}
  apiGateWayUrl = 'http://localhost:8085';
  apiVersion = '';
  getAllCustomersUrl: string =
    this.apiGateWayUrl + this.apiVersion + '/customers';
  getSearchCustomersUrl: string =
    this.apiGateWayUrl + this.apiVersion + '/customers';
  addCustomerUrl: string = this.apiGateWayUrl + this.apiVersion + '/customers';
  modifyCustomerUrl: string =
    this.apiGateWayUrl + this.apiVersion + '/customers';

  getAllCustomers(): Observable<CustomerModel[]> {
    return this.http.get<CustomerModel[]>(this.getAllCustomersUrl);
  }
  getSearchCustomers(search: string): Observable<CustomerModel[]> {
    return this.http.get<CustomerModel[]>(this.getSearchCustomersUrl + '/' + search);
  }
  addCustomer(body: CustomerModel) {
    return this.http.post(this.addCustomerUrl, body);
  }
  modifyCustomer(customerId: number, body: CustomerModel) {
    return this.http.put(this.modifyCustomerUrl + '/' + customerId, body);
  }
}
