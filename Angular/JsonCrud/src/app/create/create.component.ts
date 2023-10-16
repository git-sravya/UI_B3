import { Component } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ProductService } from '../product.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.css']
})
export class CreateComponent {
  productForm!: FormGroup;

  constructor(public fb: FormBuilder,private router: Router,
                        public service:ProductService)
    {
      this.productForm = this.fb.group({
      id:[],
      name: [''],
      description: [''],
      price: [],
      quantity: [],    
    })
    }

    submitForm(){
        this.service.AddProduct(this.productForm.value).subscribe((res)=>{
          this.router.navigateByUrl('View')
        });
    }

}
