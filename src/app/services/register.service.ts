import { Injectable } from '@angular/core';
import {Router} from '@angular/router';
import {HttpClient} from '@angular/common/http';
import {HomePageModule} from '../home/home.module';
import {AboutPageModule} from '../about/about.module';

@Injectable({
  providedIn: 'root'
})
export class RegisterService {

  public REST_API_SERVER = "http://localhost:8080";
  public message: string;

  constructor(private router: Router, public http: HttpClient) { }

  public registerRequest(patient: any){
    return this.http.post<any>(this.REST_API_SERVER + "/registerPatient", patient, {observe:'response'});
  }

  register(patient){
    this.registerRequest(patient).subscribe(res => {
          if(res.body.status !== 'error'){
            this.message = 'Inscription effectuée';
          }
          else{
            if (res.body.data.error === 'USERNAME_EXIST'){
              this.message = 'Ce nom d\'utilisateur existe déjà!';
            }
            else if (res.body.data.error === 'MAIL_EXIST'){
              this.message = 'Ce mail a déjà un compte!';
            }
          }
        },
        err => {
          console.log(err);
        });
  }
}
