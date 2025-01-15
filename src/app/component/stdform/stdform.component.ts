import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { TableService } from 'src/app/service/table.service';
import { UuidService } from 'src/app/service/uuid.service';

@Component({
  selector: 'app-stdform',
  templateUrl: './stdform.component.html',
  styleUrls: ['./stdform.component.scss']
})
export class StdformComponent implements OnInit {

  constructor(
    private _uuidService:UuidService,
    private _stdService:TableService
  ) { }

  ngOnInit(): void {
    const stdArr=localStorage.getItem('stdArr')
    if(stdArr){
      this._stdService.stdArr=JSON.parse(stdArr)
    }
  }


  @ViewChild("stdForm") stdForm !:NgForm
  @ViewChild("contact") contact !:any

  onSubmit(){
    if(this.stdForm.valid){
      let newstdObj={
        ...this.stdForm.value,contact:+(this.contact.value),stdId:this._uuidService.generateUuid()
      }
      this._stdService.addStddata(newstdObj)
      this.stdForm.reset()
      console.log(newstdObj);
      
    }
  }
}
