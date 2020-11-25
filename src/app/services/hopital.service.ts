import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class HopitalService {

  public REST_API_SERVER = "http://localhost:8080";
  public message: string;

  constructor(public http: HttpClient) { }

  public getHopital(){
    return this.http.get(this.REST_API_SERVER + "/hopital/all");
  }

  public getSpecialite(){
    return this.http.get(this.REST_API_SERVER + "/hopital/specialite/all");
  }

}
