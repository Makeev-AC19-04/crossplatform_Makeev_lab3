import { HttpClient, HttpResponse, HttpInterceptor, HttpRequest, HttpHandler, HttpEvent } from '@angular/common/http';
import { Inject, Injectable } from '@angular/core';
import { Observable, tap, of } from 'rxjs';
import { map,catchError } from 'rxjs/operators';
import { SRV_URL } from 'src/app/config';

export const ACCESS_TOKEN_KEY = 'access_token'

@Injectable({
  providedIn: 'root'
})
export class AuthService{

  constructor(private http: HttpClient) { }

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    let headers = req.headers;
    if (req.url=="values/getrole")
    {
      const token = localStorage.getItem('token');
      headers = headers.append('Authorization', `Bearer ${token}`);
    }
    const request = req.clone({
      headers,
      url:`${SRV_URL}${req.url}`,
    });
    return next.handle(request);
  }

  public login(info: { login: string, password: string }):Observable<number> { 
    
    return this.http.post<any>("account/login", info, {observe: 'response'})
            .pipe(
              map(res=> 
              {
                if (res.status == 200)
                  localStorage.setItem("token", res.body.access_token);   
                  //alert("token: " + res.body.access_token)             
                return res.status;
              }),
              catchError(error => {
                alert("Неверный логин/пароль");
                return of((error as HttpResponse<any>).status);
              }
              )
            )
  }

  public sendTestRequest(){
    this.http.get("doctors").subscribe(res=> alert("Вы авторизованы"));
  }

  public sendRoleRequest() {
    this.http.get("values/getrole").subscribe(res=>alert(res));
  }

  Logout(): void{
    localStorage.removeItem(ACCESS_TOKEN_KEY);
  }
}
