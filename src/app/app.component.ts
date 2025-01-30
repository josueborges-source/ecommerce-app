import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ProductRegistrationComponent } from './product-registration/product-registration.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, ProductRegistrationComponent], // <-- Importando o componente
  templateUrl: './app.component.html'
})
export class AppComponent { }