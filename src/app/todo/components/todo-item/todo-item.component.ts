import {Component, EventEmitter, Input, Output} from '@angular/core';
import {TodoItem} from "../../../store/todo.store";

@Component({
  selector: 'app-todo-item',
  templateUrl: './todo-item.component.html',
  styleUrls: ['./todo-item.component.css']
})
export class TodoItemComponent {
  @Input()
  todoItem: TodoItem;

  @Output()
  deleteItem: EventEmitter<number> = new EventEmitter();

  @Output()
  changeStatus: EventEmitter<{keyValue: string, id: number}> = new EventEmitter();

  deleteTodoItem(): void {
   this.deleteItem.emit(this.todoItem.id);
  }

  changeTodoStatus(keyValue: string): void {
    this.changeStatus.emit({
      keyValue,
      id: this.todoItem.id
    });
  }
}
