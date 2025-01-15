import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { TodoService } from 'src/app/service/todo.service';
import { UuidService } from 'src/app/service/uuid.service';

@Component({
  selector: 'app-todoform',
  templateUrl: './todoform.component.html',
  styleUrls: ['./todoform.component.scss']
})
export class TodoformComponent implements OnInit {

  constructor(
    private _uuidService:UuidService,
    private _todoService:TodoService
  ) { }
@ViewChild('todoForm') todoForm!:NgForm
  ngOnInit(): void {
    const todoArr=localStorage.getItem('todoArr')
    if(todoArr){
      this._todoService.todoArr=JSON.parse(todoArr)
    }
  }

  onSubmit(){
    if(this.todoForm.valid){
      let todoObj={
        ...this.todoForm.value,todoId:this._uuidService.generateUuid()
      }
      console.log(todoObj);
      this.todoForm.reset()
      this._todoService.creattodos(todoObj)
    }
  }

}
