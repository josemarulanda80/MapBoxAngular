import { PlatformLocation } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Feature, PlacesResponse } from '../interfaces/places';

@Injectable({
  providedIn: 'root'
})
export class PlacesService {
  public useLocation?:[number,number];
  public isLoadingPlaces:boolean= false;
  public places:Feature[]=[]
get isUSerLocationReady():boolean{
  return !!this.useLocation;
}
  constructor(private placesApi:PlatformLocation) { 
    this.getUserLocation()
  }
  public async getUserLocation():Promise<
  [number,number]>{
    return new Promise((resolve,reject)=>{
      navigator.geolocation.getCurrentPosition(
      ({coords})=>{
        this.useLocation=[coords.longitude,coords.latitude];
        resolve(this.useLocation);
      },
      (err)=>{
        alert('No se pudo obtener la geolocalización')
        console.log(err);
        reject();
      }
      )
    })
  }
  getPlacesByQuery(query:string=''){
    //Todo: evaluar cuando el query es nulo
    this.isLoadingPlaces=true;
    this.placesApi.get<PlacesResponse>(`/${query}.json`,{
      params: {
        proximity:this.useLocation?.join(',')
      }
    })
    .subscribe(resp =>{
      console.log(resp.features)
      this.isLoadingPlaces=false;
      this.places=resp.features;
    })
  }
}
