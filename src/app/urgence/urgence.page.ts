import { Component, OnInit } from '@angular/core';
import {Geolocation} from '@ionic-native/geolocation/ngx'

@Component({
  selector: 'app-urgence',
  templateUrl: './urgence.page.html',
  styleUrls: ['./urgence.page.scss'],
})
export class UrgencePage implements OnInit {

  private longitude : number;
  private latitude : number;
  private precision : number;
  zoom: any = 13;

  constructor(private geolocation: Geolocation) {
    this.geolocation.getCurrentPosition().then((position) => {
      this.longitude = position.coords.longitude;
      this.latitude = position.coords.latitude;
      this.precision = position.coords.accuracy / 100;
    });
  }

  ngOnInit() {

  }

}
