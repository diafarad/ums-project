import { Injectable } from '@angular/core';
import {DocteurModel} from '../model/Docteur.model';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class DocteurService {
  currentDocteur: DocteurModel;

  public REST_API_SERVER = "http://localhost:8080";
  public message: string;
  public ok: string;

  constructor(public http: HttpClient) { }

  public getDocteurs(){
    return this.http.get(this.REST_API_SERVER + "/medecin/all");
  }

    public registerRequest(medecin: any){
        return this.http.post<any>(this.REST_API_SERVER + "/medecin/registerMedecin", medecin, {observe:'response'});
    }

    register(medecin) {
        this.registerRequest(medecin).subscribe(res => {
                if(res.body.status !== 'error'){
                    this.message = 'Medecin ajouté';
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

    public takeRdv(rdv : any){
        return this.http.post<any>(this.REST_API_SERVER + "/hopital/takerdv", rdv, {observe:'response'});
    }

    rdv(rdv){
        this.takeRdv(rdv).subscribe(res => {
                if(res.body.status !== 'error'){
                    this.ok = 'ok';
                    localStorage.setItem('ok','ok');
                    //alert(this.ok);
                }
                else{
                    this.ok = 'ko';
                    localStorage.setItem('ok','ko');
                    //alert(this.ok);
                }
            },
            err => {
                console.log(err);
            });
    }
}
