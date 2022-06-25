import { Injectable } from '@angular/core';
import {TodoItem, TodoStore} from "../../store/todo.store";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class TodoService {

  constructor(private todoStore: TodoStore) { }


  get getAllTodoItems(): Observable<TodoItem[]> {
    return this.todoStore.select('todoList');
  }

  deleteTodoItem(todoItem: TodoItem[]): void {
    this.todoStore.set('todoList', todoItem);
  }

  updateTodoList(todoItem: TodoItem[]): void {
    this.todoStore.set('todoList', todoItem);
  }

  addNewItem(title: string) {
    const randomBinaryId = parseInt(parseInt((Math.random() * 50000).toFixed(7)).toString(2));
    const newItem: TodoItem = {
      id: randomBinaryId,
      title: title,
      done: false,
      important: false
    };
    const newItems = [...this.todoStore.value.todoList, newItem];
    this.updateTodoList(newItems);
  }
}
