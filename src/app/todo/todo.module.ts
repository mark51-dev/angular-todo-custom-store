import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TodoRoutingModule } from './todo-routing.module';
import {TodoComponent} from "./containers/todo/todo.component";
import {TodoItemComponent} from "./components/todo-item/todo-item.component";
import {TodoStore} from "../store/todo.store";
import { TodoAddComponent } from './components/todo-add/todo-add.component';
import {FormsModule} from "@angular/forms";


@NgModule({
  declarations: [
    TodoComponent,
    TodoItemComponent,
    TodoAddComponent
  ],
  imports: [
    CommonModule,
    TodoRoutingModule,
    FormsModule
  ],
  providers: [
    TodoStore
  ]
})
export class TodoModule { }
