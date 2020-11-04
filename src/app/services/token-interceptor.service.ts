import { Injectable } from '@angular/core';
import {Router} from '@angular/router';
import {HttpErrorResponse, HttpEvent, HttpHandler, HttpInterceptor, HttpRequest} from '@angular/common/http';
import {Observable} from 'rxjs';
import {tap} from 'rxjs/operators';
import {LoginPageModule} from '../login/login.module';
import {AccessDeniedPageModule} from '../access-denied/access-denied.module';

@Injectable({
  providedIn: 'root'
})
export class TokenInterceptorService implements HttpInterceptor{

  constructor(private router: Router) { }

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    //const authService = this.injector.get(LoginService)
    //const token = authService.loggedIn();
    const token = localStorage.getItem('token');
    console.log(token);
    if(token !== 'undefined' && token !== null){
      console.log('Token is ok');
      req = req.clone(
          {
            setHeaders :{
              Authorization:`Bearer ${token}`
            }
          });
    }
    console.log('-----------------' + token);
    return next.handle(req).pipe(tap(() => {},
        (err: any) => {
          if (err instanceof HttpErrorResponse) {
            if (err.status === 401) {
              this.router.navigate(['login']).then(r => LoginPageModule);
            }
            else if(err.status === 403){
              this.router.navigate(['access-denied']).then(r => AccessDeniedPageModule);
            }
          }
        })
    );
  }

}
