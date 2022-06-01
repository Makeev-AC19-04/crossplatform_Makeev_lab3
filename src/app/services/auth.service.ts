import { HttpClient, HttpResponse } from '@angular/common/http';
import { Inject, Injectable } from '@angular/core';
import { Observable, tap, of } from 'rxjs';
import { map,catchError } from 'rxjs/operators';

export const ACCESS_TOKEN_KEY = 'access_token'

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http: HttpClient) { }

  public login(info: { login: string, password: string }):Observable<number> { 
        
    return this.http.post<any>("account/login", info, {observe: 'response'})
            .pipe(
              map(res=> 
              {
                if (res.status == 200)
                  localStorage.setItem("token", res.body.token);                
                return res.status;
              }),
              catchError(error => {
                return of((error as HttpResponse<any>).status);
              }
              )
            )
  }

  public sendTestRequest(){
    this.http.get("/doctors").subscribe(res=> alert(res));
  }

  Logout(): void{
    localStorage.removeItem(ACCESS_TOKEN_KEY);
  }
}
