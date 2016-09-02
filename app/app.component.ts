import { Component } from '@angular/core';
import { HTTP_PROVIDERS } from '@angular/http';

import { TodoService } from './shared/todo.service';
import { TodoListComponent } from './components/todo-list/todo-list.cpomponet';
import { Todo } from './shared/todo.model';
import { TodoFormComponent } from './components/todo-form/todo-form.component';




@Component({
    selector: 'todo-app',
    templateUrl: 'app/app.component.html',
    styleUrls: ['app/app.component.css'],
    directives: [TodoFormComponent, TodoListComponent],
    providers: [HTTP_PROVIDERS,TodoService]
})
export class AppComponent {
    title: string;

    constructor() {
        this.title = 'Angular 2Do';
    }

}
