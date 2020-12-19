import {Component, ElementRef, OnInit, ViewChild} from '@angular/core';
import {Geolocation, GeolocationOptions ,Geoposition ,PositionError} from '@ionic-native/geolocation/ngx'

@Component({
  selector: 'app-urgence',
  templateUrl: './urgence.page.html',
  styleUrls: ['./urgence.page.scss'],
})
export class UrgencePage implements OnInit {

  private precision : number;
  zoom: any = 13;
  options : GeolocationOptions;
  currentPos : Geoposition;
  @ViewChild('map') mapElement: ElementRef;
  map: any;
  places : Array<any> ;

  constructor(private geolocation: Geolocation) {  }

  ngOnInit() {

  }

  ionViewDidEnter(){
    this.getUserPosition();
  }

  getServicesDeSante(latLng)
  {
    let service = new google.maps.places.PlacesService(this.map);
    let request = {
      location : latLng,
      radius : 8047 ,
      types: ["hospital","doctor","dispensary","clinical","health","pharmacy","physiotherapist","dentist","drugstore"]
    };
    return new Promise((resolve,reject)=>{
      service.nearbySearch(request,function(results,status){
        if(status === google.maps.places.PlacesServiceStatus.OK)
        {
          resolve(results);
        }else
        {
          reject(status);
        }

      });
    });

  }

  createMarker(place)
  {
    let marker = new google.maps.Marker({
      map: this.map,
      animation: google.maps.Animation.DROP,
      position: place.geometry.location
    });
  }

  getUserPosition(){
    this.options = {
      enableHighAccuracy : true
    };

    this.geolocation.getCurrentPosition(this.options).then((pos : Geoposition) => {

      this.currentPos = pos;
      console.log(pos);
      this.addMap(pos.coords.latitude,pos.coords.longitude);
      this.precision = pos.coords.accuracy / 100;

    },(err : PositionError)=>{
      console.log("error : " + err.message);
    });
  }

  addMap(lat,long){

    let latLng = new google.maps.LatLng(lat, long);

    let mapOptions = {
      center: latLng,
      zoom: 15,
      mapTypeId: google.maps.MapTypeId.ROADMAP
    }

    this.map = new google.maps.Map(this.mapElement.nativeElement, mapOptions);
    this.getServicesDeSante(latLng).then((results : Array<any>)=>{
      this.places = results;
      for(let i = 0 ;i < results.length ; i++)
      {
        this.createMarker(results[i]);
      }
    },(status)=>console.log(status));
    this.addMarker();

  }

  addMarker(){

    let marker = new google.maps.Marker({
      map: this.map,
      animation: google.maps.Animation.DROP,
      position: this.map.getCenter()
    });

    let content = "<p>Votre position actuelle !</p>";
    let infoWindow = new google.maps.InfoWindow({
      content: content
    });

    google.maps.event.addListener(marker, 'click', () => {
      infoWindow.open(this.map, marker);
    });

  }

}
