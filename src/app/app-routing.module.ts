import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TemplateComponent } from './core/template/template.component';
import { LoginComponent } from './users/login/login.component';

const routes: Routes = [
  {path:'',component:LoginComponent},
  {path:'Dash',component:TemplateComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
