import { HttpClientModule } from '@angular/common/http';
import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CustomerSearchComponent } from '@customer-registration/customer-search';
import { LayoutModule } from '@customer-registration/layout';

@Component({
  standalone: true,
  imports: [
    RouterModule,
    LayoutModule,
    HttpClientModule,
    CustomerSearchComponent,
  ],
  selector: 'customer-registration-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  title = 'Cadastro de Clientes';
}
