import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { LayoutModule } from '@customer-registration/layout';

@Component({
  standalone: true,
  imports: [RouterModule, LayoutModule],
  selector: 'customer-registration-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  title = 'Cadastro de Clientes';
}
