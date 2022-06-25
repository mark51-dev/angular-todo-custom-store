import {Component, EventEmitter, OnDestroy, OnInit} from '@angular/core';
import {TodoService} from "../../sevice/todo.service";
import {TodoItem} from "../../../store/todo.store";
import {Subscription} from "rxjs";

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.css']
})
export class TodoComponent implements OnInit, OnDestroy {
  todoListItems: TodoItem[] = [];
  subTodoList: Subscription;
  constructor(private todoList: TodoService) { }

  ngOnInit(): void {
     this.todoList.getAllTodoItems
       .subscribe(todoList => {
         this.todoListItems = todoList;
       });
  }

  ngOnDestroy() {
    this.subTodoList.unsubscribe();
  }

  deleteTodoItem(id: number):void {
    const filteredTodoList = this.todoListItems.filter(item => item.id  !== id);
    this.todoList.deleteTodoItem(filteredTodoList);
  }

  changeTodoStatus(status: any) {
    const idx = this.todoListItems.findIndex(item => item.id === status.id);
    // @ts-ignore
    this.todoListItems[idx][status.keyValue] = !this.todoListItems[idx][status.keyValue];
    this.todoList.updateTodoList(this.todoListItems);
  }

  addNewItem(title: string) {
    console.log(title);
    this.todoList.addNewItem(title);
  }

}
