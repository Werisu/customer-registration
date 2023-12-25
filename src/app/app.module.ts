import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { appRoutes } from './app.routes';
import { LayoutModule } from '@customer-registration/layout';
import { CustomerSearchComponent } from '@customer-registration/customer-search';

@NgModule({
  declarations: [AppComponent],
  imports: [
    HttpClientModule,
    BrowserModule,
    RouterModule.forRoot(appRoutes, { initialNavigation: 'enabledBlocking' }),
    LayoutModule,
    BrowserAnimationsModule,
    CustomerSearchComponent,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
