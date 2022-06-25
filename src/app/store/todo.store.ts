import {BehaviorSubject, distinctUntilChanged, Observable, pluck} from "rxjs";

export interface State {
  todoList: TodoItem[];
  [key: string]: any
}


export interface TodoItem {
  id: number,
  title: string,
  important: boolean,
  done: boolean
}

const state: State = {
  todoList: [] = [{
    id: 0,
    title: 'Need to do something',
    important: true,
    done: false
  },{
    id: 1,
    title: 'Need to do something',
    important: false,
    done: true
  },{
    id: 2,
    title: 'Need to do something',
    important: false,
    done: false
  },{
    id: 3,
    title: 'Need to do something',
    important: false,
    done: false
  },]
};

export class TodoStore {
  private subject = new BehaviorSubject<State>(state);
  private store = this.subject.asObservable().pipe(
    distinctUntilChanged()
  );

  get value() {
    return this.subject.value;
  }

  select<T>(name: string): Observable<T> {
    return this.store.pipe(
      pluck(name)
    );
  }

  set(name: string, state: any) {
    this.subject.next({...this.value, [name]: state});
  }
}
