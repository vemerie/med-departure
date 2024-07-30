import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Product } from '../interfaces/dashboard';

@Injectable({
  providedIn: 'root',
})
export class DashboardService {
  base_url = '/base';

  constructor(private http: HttpClient) {}

  getAllProduct(): Observable<Product> {
    return this.http.get<Product>(`${this.base_url}/product`);
  }
}
