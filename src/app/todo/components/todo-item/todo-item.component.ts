import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {TodoItem} from "../../../store/todo.store";

@Component({
  selector: 'app-todo-item',
  templateUrl: './todo-item.component.html',
  styleUrls: ['./todo-item.component.css']
})
export class TodoItemComponent implements OnInit {
  @Input()
  todoItem: TodoItem;

  @Output()
  deleteItem: EventEmitter<number> = new EventEmitter();

  @Output()
  changeStatus: EventEmitter<{keyValue: string, id: number}> = new EventEmitter();
  constructor() { }

  ngOnInit(): void {
  }

  deleteTodoItem() {
   this.deleteItem.emit(this.todoItem.id);
  }

  changeTodoStatus(keyValue: string) {
    this.changeStatus.emit({
      keyValue,
      id: this.todoItem.id
    });
  }
}
