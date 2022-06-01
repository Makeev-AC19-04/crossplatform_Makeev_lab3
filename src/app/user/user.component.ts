import { Component, OnInit } from '@angular/core';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {
  
  public msg?:string;
  constructor(private as: AuthService) { }

  public ResetMsg():void{
    this.msg = "Log in to continue";
  }

  public role = 'Гость';

  public Login(info: { login: string, password: string }) {
    this.as.login(JSON.parse(JSON.stringify(info))).subscribe(
      status=>
      {
        if (status==200)
        {
          this.msg = "Success";
          this.as.sendTestRequest();
        }
        else if (status==401)
          this.msg = "Wrong login/password";
        else
          this.msg = `Something went wrong (${status})`;
      });
 }

  ngOnInit(): void {
  }

}
