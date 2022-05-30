import { HttpClient } from '@angular/common/http';
import { Component, Injectable, OnInit } from '@angular/core';
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
  public doctor = {id:1,
    name:"Константинова Ольга Алексеевна",
    specialityId:3,"speciality":null};
  public ChangeName(event: any){
    this.doctor.name=event.target.value;
  }
  // private _doctorService;
  // constructor(private _http: HttpClient) { }
  // public doctors;

  // constructor(doctorService: DoctorService){
  //   this._doctorService = doctorService;
  // }

  public getAllDoctors(){
    //return this._http.get('https://localhost:2007/doctors/');
  }

  ngOnInit(): void {
    //this.doctors = this._doctorService.getAllDoctors();
    //this.getAllDoctors.subscribe();
  }

}
