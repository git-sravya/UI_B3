import { Component } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ProductService } from '../product.service';

@Component({
  selector: 'app-update',
  templateUrl: './update.component.html',
  styleUrls: ['./update.component.css']
})
export class UpdateComponent {
  productForm!: FormGroup;

  constructor(public fb: FormBuilder,private router: ActivatedRoute,router1:Router,
                        public service:ProductService)
    {

      service.GetById(this.router.snapshot.params['productid']).subscribe(x=>{

        this.productForm = this.fb.group({
          id:new FormControl('x[id]',Validators.required),
          name: [x['name']],
          description: [x['description']],
          price: [x['price']],
          quantity: [x['quantity']],    
        })
      });

      
     
    }
    submitForm(){
      this.service.
        UpdateProduct(this.router.snapshot.params['productid'],
                                      this.productForm.value).subscribe();

    }
}
