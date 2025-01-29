

import { Component} from '@angular/core';
import { FormGroup, FormControl, FormsModule, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-product-registration',
  
  templateUrl: './product-registration.component.html',
  styleUrls: ['./product-registration.component.css']
})
export class ProductRegistrationComponent {

  productForm: FormGroup = new FormGroup({
    productName: new FormControl<string>(''),
    productDescription:  new FormControl<string>(''),
    productPrice:  new FormControl<string>(''),
    productCategory: new FormControl<string>(''),
    productStock:  new FormControl<string>(''),
  });

  constructor() {
   
  }

  // Método para tratar o envio do formulário
  onSubmit(): void {
    if (this.productForm.valid) {
      const productData = this.productForm.value;
      console.log('Produto cadastrado com sucesso:', productData);
      // Aqui você pode integrar com um serviço para salvar no backend
      this.resetForm();
    } else {
      console.log('Formulário inválido. Por favor, preencha os campos corretamente.');
    }
  }

  // Formatação do preço ao digitar
  formatPriceOnInput(event: Event): void {
    const inputElement = event.target as HTMLInputElement;
  
    if (inputElement) {
      let value = inputElement.value;
  
      // Remove caracteres não numéricos
      value = value.replace(/[^0-9.,]/g, '');
  
      // Separa em partes antes e depois do separador decimal
      const parts = value.split(/[.,]/);
      if (parts.length > 1) {
        // Mantém duas casas decimais
        value = `${parts[0]},${parts[1].substring(0, 2)}`;
      }
  
      // Atualiza o valor do input
      inputElement.value = value;
  
      // Atualiza o controle de formulário
      const productPriceControl = this.productForm.get('productPrice');
      if (productPriceControl instanceof FormControl) {
        const numericValue = parseFloat(value.replace(',', '.')) || 0;
        productPriceControl.setValue(numericValue); // Armazena como número
      }
    }
  }

  resetForm(): void {
    this.productForm.reset({
      productName: '',
      productDescription: '',
      productPrice: 0,
      productCategory: '',
      productStock: 0
    });
  }
}
