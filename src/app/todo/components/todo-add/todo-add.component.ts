import {Component, EventEmitter, OnInit, Output} from '@angular/core';

@Component({
  selector: 'app-todo-add',
  templateUrl: './todo-add.component.html',
  styleUrls: ['./todo-add.component.css']
})
export class TodoAddComponent implements OnInit {
  todoTitle: string = '';
  constructor() { }

  @Output()
  addItem: EventEmitter<string> = new EventEmitter();
  ngOnInit(): void {
  }


  addNewItem() {
    if (this.todoTitle) {
      this.addItem.emit(this.todoTitle);
      this.todoTitle = '';
    }
  }
}
