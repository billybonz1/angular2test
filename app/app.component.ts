import {Component} from '@angular/core';

@Component({
    selector: 'todo-app',
    templateUrl: 'app/app.component.html',
    styleUrls: ['app/app.component.css']
})
export class AppComponent {
    title: string;
    todos: string[];

    constructor() {
        this.title = 'Angular 2Do';
        this.todos = [];
    }

    addToDo(event: any){
        if(event.type === 'keyup' && event.which === 13){
            this.todos.push(event.target.value);
        }
    }
}
