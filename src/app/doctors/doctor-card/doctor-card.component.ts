import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
//import { EventEmitter } from 'stream';

@Component({
  selector: 'app-doctor-card',
  templateUrl: './doctor-card.component.html',
  styleUrls: ['./doctor-card.component.css']
})
export class DoctorCardComponent implements OnInit {

  public expr = false;

  //@Input() dctrname: string | undefined;
  @Input()
  dctrname?: string;

  @Output()
  newnameevent = new EventEmitter();

  constructor() {
    console.log('constructor', this.dctrname);
   }

  changeDctrname(newname: string){
    this.dctrname = newname;
  }

  ngOnInit(): void {
    console.log('ngOnInit', this.dctrname);
  }

  onChangeName(text: string){
    this.newnameevent.emit('Name: ' + this.dctrname);
    //console.log('ChangeNameClicked', this.dctrname);
  }

  Changedctrname(){
    console.log('Changedctr clicked')
  }

}
