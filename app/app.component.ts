import { Component } from '@angular/core';
import { TodoListComponent } from './components/todo-list/todo-list.cpomponet';
import { Todo } from './shared/todo.model';
import { TodoFormComponent } from './components/todo-form/todo-form.component';
import { todos } from "./shared/todo.data";



@Component({
    selector: 'todo-app',
    templateUrl: 'app/app.component.html',
    styleUrls: ['app/app.component.css'],
    directives: [TodoFormComponent, TodoListComponent]
})
export class AppComponent {
    title: string;

    constructor() {
        this.title = 'Angular 2Do';
    }

    // onTodoAdded(todo: Todo){
    //     this.todos.push(todo);
    // }
}
