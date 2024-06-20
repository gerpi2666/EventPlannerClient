import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './login/login.component';
import { TableListComponent } from './table-list/table-list.component';
import { CreateComponent } from './create/create.component';
import { UserRoutingModule } from './users-routing.module';

import { MatInputModule } from '@angular/material/input';
import { MatIconModule } from '@angular/material/icon'; 
import { MatButtonModule } from '@angular/material/button'; 
import { MatCardModule } from '@angular/material/card'; 
import { ReactiveFormsModule } from '@angular/forms';
import {MatTabsModule} from '@angular/material/tabs';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatTableModule } from '@angular/material/table';


import { MatSelectModule } from '@angular/material/select';

import { MatRadioModule } from '@angular/material/radio';
import {MatDividerModule} from '@angular/material/divider'; 
import {MatDialogModule} from "@angular/material/dialog";




@NgModule({
  declarations: [
    LoginComponent,
    TableListComponent,
    CreateComponent
  ],
  imports: [
    CommonModule,
    UserRoutingModule,
    MatCardModule,
    MatTabsModule,
    MatButtonModule,MatIconModule,
    MatDividerModule,
    MatDialogModule,
    MatInputModule,
    MatSelectModule,
    MatRadioModule,
    MatTableModule,
    MatCheckboxModule,
    ReactiveFormsModule

  ]
})
export class UsersModule { }
