import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgCircleProgressModule } from 'ng-circle-progress';
import { CircleprogressHySComponent } from './components/circleprogress-hy-s/circleprogress-hy-s.component';
import { HttpClientModule } from '@angular/common/http';
import { AboutmeComponent } from './components/aboutme/aboutme.component';
import { LoginComponent } from './components/login/login.component'

@NgModule({
  declarations: [
    AppComponent,
    CircleprogressHySComponent,
    AboutmeComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgCircleProgressModule.forRoot({}),
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
