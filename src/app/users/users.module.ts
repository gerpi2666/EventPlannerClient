import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './login/login.component';
import { TableListComponent } from './table-list/table-list.component';
import { CreateComponent } from './create/create.component';



@NgModule({
  declarations: [
    LoginComponent,
    TableListComponent,
    CreateComponent
  ],
  imports: [
    CommonModule
  ]
})
export class UsersModule { }
