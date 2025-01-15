import { Injectable } from '@angular/core';
import { Itable } from '../module/stdtable';
import { SnackbarService } from './snackbar.service';

@Injectable({
  providedIn: 'root'
})
export class TableService {

  constructor(
    private _snackbar:SnackbarService
  ) { }
  stdArr:Array<Itable>=[
    {
      fname:'jhon',
      lname:'doe',
      email:'jd@gmail.com',
      contact:1234567890,
      stdId:'123'
    }
  ]

  fetchAllstd():Array<Itable>{
    return this.stdArr;
  }

  addStddata(std:Itable){
    this.stdArr.push(std)
    localStorage.setItem('stdArr',JSON.stringify(this.stdArr))
    this._snackbar.opensnackbar(`student ${std.fname} is added successfully`)
  }
onRemoveStd(std:Itable){
  let conformTrue=confirm()
  if(conformTrue){
    let removeId=this.stdArr.findIndex(std=>std.stdId==std.stdId)
    this.stdArr.splice(removeId,1)
    localStorage.setItem('stdArr',JSON.stringify(this.stdArr))
    this._snackbar.opensnackbar(`the student${std.fname} is removed successfully`)
  }
}
}
