import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class AppsService{
    constructor(private http:HttpClient){}
    appsDetails;  
    getAppsData():any{
      return this.http.get("https://codingkrishna.github.io/api/apps.json")
    }
}