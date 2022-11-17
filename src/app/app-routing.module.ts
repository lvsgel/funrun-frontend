import { NgModule, Component } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { FAQComponent } from './faq/faq.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { CreateRunnerComponent } from './create-runner/create-runner.component';
import { RunnerComponent } from './runner/runner.component';
import { UpdateRunnerComponent } from './update-runner/update-runner.component';


const routes: Routes = [
  {path: 'about', component: AboutComponent},
  {path: 'faq', component: FAQComponent},
  {path: 'home', component: HomeComponent},
  {path: 'login', component:LoginComponent},
  {path: 'runner', component:RunnerComponent},
  {path: 'createRunner', component:CreateRunnerComponent},
  {path: 'createRunner/:id', component:CreateRunnerComponent},
  {path: 'updateRunner', component:UpdateRunnerComponent},
  {path: 'updateRunner/:id', component:UpdateRunnerComponent}


  

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
