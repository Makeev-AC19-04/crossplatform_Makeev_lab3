import { Injectable } from '@angular/core';

// @Injectable({
//   providedIn: 'root'
// })

export class DoctorService {
  private doctors = [
    {id:1, name:"Константинова Ольга Алексеевна",specialityId:3},
    {id:2, name:"Казакова Василиса Петровна",specialityId:1},
    {id:3, name:"Иванова Нина Алексеевна",specialityId:2},
  ];

  constructor() { }
  public getAllDoctors(){
    return this.doctors;
  }
}
