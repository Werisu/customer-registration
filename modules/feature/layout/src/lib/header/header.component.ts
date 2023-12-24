import { Component, Input } from '@angular/core';

@Component({
  selector: 'customer-registration-header',
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss',
})
export class HeaderComponent {
  // SOLID - Single Responsibility Principle (SRP)
  @Input({ required: true }) title!: string;
}
