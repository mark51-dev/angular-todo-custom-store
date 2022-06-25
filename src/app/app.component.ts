import { Component } from '@angular/core';
import {TodoStore} from "./store/todo.store";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'angular-todo';
  constructor() {
  }
}
