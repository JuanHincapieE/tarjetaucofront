import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { HomeComponent } from './pages/home/home.component';
import { LoginComponent } from './pages/login/login.component';
import { RegisterComponent } from './pages/register/register.component';
import { StoresComponent } from './pages/stores/stores.component';
import { UsComponent } from './pages/us/us.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CardComponent } from './pages/card/card.component';
import { HttpClientModule, HttpClient } from '@angular/common/http';


@NgModule({
  
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    HomeComponent,    
    LoginComponent,
    RegisterComponent,
    StoresComponent,
    UsComponent,
    CardComponent  
  ],
  imports: [
    HttpClientModule,
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
