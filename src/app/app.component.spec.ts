import { ComponentFixture, TestBed } from '@angular/core/testing';
import { AppComponent } from './app.component';
import { RouterTestingModule } from '@angular/router/testing';
import { LayoutModule } from '@customer-registration/layout';
import { CustomerSearchComponent } from '@customer-registration/customer-search';
import { HttpClientTestingModule } from '@angular/common/http/testing';

describe('AppComponent', () => {
  let fixture: ComponentFixture<AppComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        RouterTestingModule,
        LayoutModule,
        CustomerSearchComponent,
        HttpClientTestingModule,
      ],
      declarations: [AppComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(AppComponent);
  });

  it('should contain header', () => {
    const header: HTMLHeadingElement =
      fixture.nativeElement.querySelector('header');
    expect(header).toBeTruthy();
  });
});
