import { Component } from '@angular/core';
import { ReactiveFormsModule, FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: 'product-registration.component.html'
})
export class AppComponent {
  productForm: FormGroup;

  constructor(private fb: FormBuilder) {
    this.productForm = this.fb.group({
      productName: [''],
      productDescription: [''],
      productCategory: [''],
      productStock: [0]
    });
  }

  onSubmit() {
    console.log(this.productForm.value);
  }
}