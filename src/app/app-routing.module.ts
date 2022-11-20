import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CardComponent } from './pages/card/card.component';
import { HomeComponent } from './pages/home/home.component';
import { LoginComponent } from './pages/login/login.component';
import { RegisterComponent } from './pages/register/register.component';
import { StoresComponent } from './pages/stores/stores.component';
import { UsComponent } from './pages/us/us.component';

const routes: Routes = [
  {path: "", component:HomeComponent},
  {path: "home", component:HomeComponent, data: {title: 'Inicio'}},
  {path:"login", component:LoginComponent, data:{title: 'Iniciar sesión'}},
  {path:"register", component:RegisterComponent, data:{title: 'Registrar'}},
  {path:"stores", component:StoresComponent, data:{title: 'Tiendas'}},
  {path:"card", component:CardComponent, data:{title: 'Tarjeta'}},
  {path:"us", component:UsComponent, data:{title:'Nosotros'}}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
