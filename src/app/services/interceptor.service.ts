import { Injectable } from '@angular/core';
import { HttpInterceptor, HttpRequest, HttpHandler, HttpEvent} from '@angular/common/http';
import { Observable } from 'rxjs';
import { SRV_URL } from 'src/app/config';

@Injectable({
  providedIn: 'root'
})
export class InterceptorService {

  constructor() { }
  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    let headers = req.headers;
    if (req.url=="values/getrole")
    {
      const token = localStorage.getItem('token');
      //alert("Token: " + token);
      headers = headers.append('Authorization', `Bearer ${token}`);
    }
    const request = req.clone({
      headers,
      url:`${SRV_URL}${req.url}`,
    });
    return next.handle(request);
  }
}
