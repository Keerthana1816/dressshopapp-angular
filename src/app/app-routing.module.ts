import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DresslistComponent } from './dresslist/dresslist.component';
import { UserlistComponent } from './userlist/userlist.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { AdminloginComponent } from './adminlogin/adminlogin.component';
import { RegisterComponent } from './register/register.component';


const routes: Routes = [
{path:'home',component:HomeComponent},
{path:'register',component:RegisterComponent},
{path:'login',component:LoginComponent},
{path:'dresslist',component:DresslistComponent},
{path:'userlist',component:UserlistComponent},
{path:'adminlogin',component:AdminloginComponent},
{path:'', redirectTo:'home', pathMatch:'full'}
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
