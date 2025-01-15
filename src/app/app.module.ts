import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { TodoformComponent } from './component/todoform/todoform.component';
import { TodolistComponent } from './component/todolist/todolist.component';
import {MatButtonModule} from '@angular/material/button';
import {MatSnackBarModule} from '@angular/material/snack-bar';
import { FormsModule } from '@angular/forms';
import { StdformComponent } from './component/stdform/stdform.component';
import { StdtableComponent } from './component/stdtable/stdtable.component';

@NgModule({
  declarations: [
    AppComponent,
    TodoformComponent,
    TodolistComponent,
    StdformComponent,
    StdtableComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatSnackBarModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
