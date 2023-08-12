import { Component, OnInit } from '@angular/core';
import { Idata } from '../../module/module';
import {  housingLocationList } from '../../module/data';

@Component({
  selector: 'app-tab',
  templateUrl: './tab.component.html',
  styleUrls: ['./tab.component.scss']
})
export class TabComponent implements OnInit {
  constructor() { }
  stayArray : Array<Idata> = []
  ngOnInit(): void {
    this.stayArray = housingLocationList
  }
  sss(){
  
  }


}
