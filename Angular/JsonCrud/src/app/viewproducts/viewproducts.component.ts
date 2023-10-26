import { Component, OnInit } from '@angular/core';
import { ProductService } from '../product.service';
import { Product } from '../Model/product';

@Component({
  selector: 'app-viewproducts',
  templateUrl: './viewproducts.component.html',
  styleUrls: ['./viewproducts.component.css']
})
export class ViewproductsComponent implements OnInit {

  products:any=[];

  constructor(private service:ProductService){   
  }

  ngOnInit() {
    
    this.service.GetAllProducts().subscribe(data=>{
       this.products=data;
    })
  }

  delete(id:any)
  {
    this.service.DeleteProduct(id).subscribe();
    this.ngOnInit();
  }

}
