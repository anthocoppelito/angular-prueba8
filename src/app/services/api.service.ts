import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Category, IProduct } from '../models/product.model';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  private baseURL = 'https://fakestoreapi.com/products'

  constructor(private _httpClient: HttpClient) { }
   //private _httpClient = inject(ApiService);
  //get products
  public getAllProducts(): Observable<IProduct[]>{  
    return this._httpClient.get<IProduct[]>(`${this.baseURL}`);
  }
  //get product/:id
  public getProduct(id: number ): Observable<IProduct>{
    return this._httpClient.get<IProduct>(`${this.baseURL}/${id}`);
  }
  //get categories
  public getAllCategories(): Observable<Category[]>{
    return this._httpClient.get<Category[]>(`${this.baseURL}/categories`);
  }

  //post product
  public newProduct(product: IProduct): Observable<IProduct>{
    return this._httpClient.post<IProduct>(`${this.baseURL}`, product);
  }
  //put product
  public updateProduct(id: number, product: IProduct): Observable<IProduct>{
    return this._httpClient.put<IProduct>(`${this.baseURL}/${id}`, product);
  }

  //delete product
  public deleteProduct(id: number): Observable<IProduct>{
    return this._httpClient.delete<IProduct>(`${this.baseURL}/${id}`);
  }

}
