import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {

  constructor()//private as: AuthService) { }
  public role = 'Гость';
  login(login:string, password: string){

  }
  ngOnInit(): void {
  }

}
