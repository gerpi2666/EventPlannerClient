import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TemplateComponent } from './core/template/template.component';
import { LoginComponent } from './users/login/login.component';

const routes: Routes = [
  {path:'Dash', component:TemplateComponent},
  {path:'Login',component:LoginComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
