import { Component } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ProductService } from '../product.service';

@Component({
  selector: 'app-update',
  templateUrl: './update.component.html',
  styleUrls: ['./update.component.css']
})
export class UpdateComponent {
  productForm!: FormGroup;

  constructor(public fb: FormBuilder,private router: ActivatedRoute,
                        public service:ProductService)
    {

      service.GetById(this.router.snapshot.params['productid']).subscribe(data=>{

        this.productForm = this.fb.group({
          id:[data['id']],
          name: [data['name']],
          description: [data['description']],
          price: [data['price']],
          quantity: [data['quantity']],    
        })
      });

      
     
    }
    submitForm(){
      this.service.
        UpdateProduct(this.router.snapshot.params['productid'],
                                      this.productForm.value).subscribe();

    }
}
