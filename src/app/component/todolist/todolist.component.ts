import { Component, OnInit } from '@angular/core';
import { Itodo } from 'src/app/module/todo';
import { TodoService } from 'src/app/service/todo.service';

@Component({
  selector: 'app-todolist',
  templateUrl: './todolist.component.html',
  styleUrls: ['./todolist.component.scss']
})
export class TodolistComponent implements OnInit {
todoArray!:Array<Itodo>;
  constructor(
    private _todoService:TodoService
  ) { }

  ngOnInit(): void {
    this.todoArray=this._todoService.fetchalltodo()
  }

onRemove(todo:Itodo){
  this._todoService.removetodo(todo)
}
}
