import { Component, OnInit } from '@angular/core';
import { Plugins } from '@capacitor/core';
import { IDietician } from '../dietician-interface';
import { HttpClient } from '@angular/common/http';
import { NativeGeocoder, NativeGeocoderResult, NativeGeocoderOptions } from '@ionic-native/native-geocoder/ngx';
const { Geolocation } = Plugins;

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
/**
  //Locating and GeoCoding
  coords: any;
  address: any;
  constructor(private nativeGeocoder: NativeGeocoder) {}
  //For looking up the current position
  async locate() {
    const coordinates = await Geolocation.getCurrentPosition();
    this.coords = coordinates.coords;
    console.log(this.coords);
  }

  //Reverse geocoding
  async reverseGeocode() {
    if (!this.coords) {
      const coordinates = await Geolocation.getCurrentPosition();
      this.coords = coordinates.coords;
    }
    let options: NativeGeocoderOptions = {
      useLocale: true,
      maxResults: 5
    };
    this.nativeGeocoder.reverseGeocode(this.coords.latitude, this.coords.longitude, options)
      .then((result: NativeGeocoderResult[]) => {
        console.log(result);
        this.address = result[0];
      })
      .catch((error: any) => console.log(error));
  }
   */

   dietician: IDietician
   constructor(private http: HttpClient) {
     this.dietician={
      id: '',
      name: '',
      experience: 0,
      image: '',
      specializations: [],
      certifications: [],
      contact_phone: ''
     } as IDietician;

     
   }

}
