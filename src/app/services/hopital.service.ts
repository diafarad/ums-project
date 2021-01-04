import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {RdvModel} from '../model/Rdv.model';

@Injectable({
  providedIn: 'root'
})
export class HopitalService {

  public REST_API_SERVER = "http://localhost:8080";
  public message: string;
  public currentRdv : RdvModel;

  constructor(public http: HttpClient) { }

  public getHopital(){
    return this.http.get(this.REST_API_SERVER + "/hopital/all");
  }

  public getRdv(){
    return this.http.get(this.REST_API_SERVER + "/hopital/allRdv");
  }

  public getOneRdv(id: number){
    return this.http.get<any>(this.REST_API_SERVER + "/hopital/getRdv/"+id,{observe:'response'});
  }

  public getSpecialite(){
    return this.http.get(this.REST_API_SERVER + "/hopital/specialite/all");
  }


}
