import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgCircleProgressModule } from 'ng-circle-progress';
import { CircleprogressHySComponent } from './components/circleprogress-hy-s/circleprogress-hy-s.component';
import { HttpClientModule } from '@angular/common/http';
import { AboutmeComponent } from './components/aboutme/aboutme.component';
import { LoginComponent } from './components/login/login.component';
import { HeaderComponent } from './components/header/header.component';
import { FormAcademicaComponent } from './components/form-academica/form-academica.component';
import { HomeComponent } from './components/home/home.component';
import { FormsModule } from '@angular/forms';
import { interceptorProvider } from 'src/service/interceptor-service';
import { NewExperienciaComponent } from './components/form-academica/new-experiencia.component';
import { EditExperienciaComponent } from './components/form-academica/edit-experiencia/edit-experiencia.component';
import { EditAboutMeComponent } from './components/aboutme/edit-about-me.component';

@NgModule({
  declarations: [
    AppComponent,
    CircleprogressHySComponent,
    AboutmeComponent,
    LoginComponent,
    HeaderComponent,
    FormAcademicaComponent,
    HomeComponent,
    NewExperienciaComponent,
    EditExperienciaComponent,
    EditAboutMeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgCircleProgressModule.forRoot({}),
    HttpClientModule,
    FormsModule
  ],
  providers: [
    interceptorProvider
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
