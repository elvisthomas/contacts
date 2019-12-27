import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { LocationStrategy, HashLocationStrategy } from '@angular/common';
import { AuthGuard } from './shared-ui/guard/auth.guard';
import { DefaultModule } from './layouts/dashboard-layout/default.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    HttpClientModule,
    AppRoutingModule,
    RouterModule,
    DefaultModule
  ],
  providers: [AuthGuard,  {
    provide: LocationStrategy,
    useClass: HashLocationStrategy
  },
],
  bootstrap: [AppComponent]
})
export class AppModule {
}
