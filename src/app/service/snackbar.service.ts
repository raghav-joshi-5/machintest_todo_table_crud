import { Injectable } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';

@Injectable({
  providedIn: 'root'
})
export class SnackbarService {

  constructor(
    private _snackbar:MatSnackBar,
  ) { }

  opensnackbar(massage:string){
    this._snackbar.open(massage,'close',{
      verticalPosition: 'top',
      horizontalPosition:'center',
      duration:3000
    })
  }
}
