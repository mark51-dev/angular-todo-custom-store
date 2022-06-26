import {Component, EventEmitter, Output} from '@angular/core';

@Component({
  selector: 'app-todo-add',
  templateUrl: './todo-add.component.html',
  styleUrls: ['./todo-add.component.css']
})
export class TodoAddComponent {
  todoTitle: string = '';
  constructor() { }

  @Output()
  addItem: EventEmitter<string> = new EventEmitter();

  addNewItem(): void {
    if (this.todoTitle) {
      this.addItem.emit(this.todoTitle);
      this.todoTitle = '';
    }
  }
}
