import { HttpClient } from '@angular/common/http';
import { Component, Injectable, OnInit, EventEmitter, Output  } from '@angular/core';
import { DoctorService } from '../doctor.service';

@Component({
  selector: 'app-doctors',
  templateUrl: './doctors.component.html',
  styleUrls: ['./doctors.component.css']
})

//@Injectable()
export class DoctorsComponent implements OnInit {
  
  public x = 5;
  public ChangeX(){
    this.x=10;
  }
  public doctorname = 'some name';
  public doctor;
  public ChangeName(name: string){
    this.doctor.name=name  //event.target.value;
  }
  
  @Output() 
  addEvent = new EventEmitter();
  
  //private _doctorService;
  constructor() { //doctorService: DoctorService
    
    //setTimeout(() => {
      this.doctor =  { name: 'NiceName' };
     // this.doctorname = 'Some name';
                    // {id:1,
                    // name:"Константинова Ольга Алексеевна",
                    // specialityId:3,"speciality":null};
      //this.name = { name: 'NiceName'};
       //this._doctorService = doctorService;
     //}, 2000);
 
   }

   Changedctrname(text: string){
    console.log(text)
   }

   onAdd(){
     this.addEvent.emit();
   }

   onChangeName(text: string){
    //this.ChangeName.emit(text); 
    //console.log(text)
   }

  public getAllDoctors(){
    //return this._http.get('https://localhost:2007/doctors/');
  }

  ngOnInit(): void {
    //this.doctor = this._doctorService.getAllDoctors();
   // this.getAllDoctors.subscribe();
  }

}
