import { Component, OnInit } from '@angular/core';
import { Todo } from '../../models/Todo';
import { MatTableDataSource } from '@angular/material/table';

@Component({
  selector: 'app-todos',
  templateUrl: './todos.component.html',
  styleUrls: ['./todos.component.css']
})
export class TodosComponent implements OnInit {

  todos: Todo[] = [];
  dataSource = null;
  inputTodo: string = "";
  displayedColumns: string[] = ['content', 'buttons'];

  constructor() { }

  ngOnInit(): void {
  }

  addTodo(): void {
    if (this.inputTodo !== "") {
      this.todos.push({
        content: this.inputTodo,
        completed: false
      });

      this.dataSource = new MatTableDataSource(this.todos);
      this.inputTodo = "";
    }
  }

  toggleTodo(index:number): void {
    this.todos.map((v, i) => {
      if (index == i) v.completed = !v.completed;

      return v;
    })
  }

  removeTodo(index:number): void {
    this.todos = this.todos.filter((v, i) => index !== i);
    this.dataSource = new MatTableDataSource(this.todos);
  }

}
