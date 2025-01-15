import { Component, OnInit } from '@angular/core';
import { Itable } from 'src/app/module/stdtable';
import { TableService } from 'src/app/service/table.service';

@Component({
  selector: 'app-stdtable',
  templateUrl: './stdtable.component.html',
  styleUrls: ['./stdtable.component.scss']
})
export class StdtableComponent implements OnInit {
stdArr!:Array<Itable>;
  constructor(
    private _stdService:TableService
  ) { }

  ngOnInit(): void {
    this.stdArr=this._stdService.fetchAllstd()
  }

  onRemove(std:Itable){
    this._stdService.onRemoveStd(std)
  }
}
