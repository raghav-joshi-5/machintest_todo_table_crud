import { Injectable } from '@angular/core';
import { Itodo } from '../module/todo';
import { SnackbarService } from './snackbar.service';

@Injectable({
  providedIn: 'root'
})
export class TodoService {

  constructor(
    private _snackbar:SnackbarService
  ) { }
  
  todoArr:Array<Itodo>=[
    {
      todoId:1,
      todoItem:'javascript',
    },
    {
      todoId:2,
      todoItem:'angular',
    },
    {
      todoId:3,
      todoItem:'html',
    },
  ]

  fetchalltodo():Array<Itodo>{
    return this.todoArr
  }

  creattodos(todo:Itodo){
    this.todoArr.push(todo)
    localStorage.setItem('todoArr',JSON.stringify(this.todoArr))
    this._snackbar.opensnackbar(`the todo item ${todo.todoItem} is added successfully`)
  }
  removetodo(todo:Itodo){
    const index=this.todoArr.findIndex((todo)=>todo.todoId===todo.todoId)
    this.todoArr.splice(index,1)
    localStorage.setItem('todoArr',JSON.stringify(this.todoArr))
    this._snackbar.opensnackbar(`the todo item ${todo.todoItem} removed successfully`)
  }
}
