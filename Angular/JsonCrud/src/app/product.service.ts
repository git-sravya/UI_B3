import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Product } from './Model/product';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  url ='http://localhost:3000/products';
  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  }

  constructor(private client:HttpClient) {    
   }

   GetAllProducts()
   {
     return this.client.get(this.url);
   }

   AddProduct(product:Product)
   {
      return this.client.post(this.url,JSON.stringify(product),this.httpOptions);
   }
   DeleteProduct(id:any)
   {
    return this.client.delete(this.url+ '/'+id);
   }

   GetById(id:any):Observable<any>
   {
    return this.client.get(this.url+ '/'+id);
   }

   UpdateProduct(id:number,product:Product)
   {
    return this.client.put(this.url+ '/'+id,JSON.stringify(product),this.httpOptions);
   }
   
}
