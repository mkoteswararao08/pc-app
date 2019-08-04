import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import{AppsService} from '../../../services/apps/apps.service';
import { element } from '@angular/core/src/render3/instructions';

@Component({
    selector    :   'apps-details',
    templateUrl :   './appsdetails.component.html',
    styleUrls   :   ['./appsdetails.component.css']
})
export class AppsDetailsComponent{
    constructor(private routerpara:ActivatedRoute,private appsService:AppsService){}
    id;
    apps;
    appslist:any[];
    app;
    ngOnInit(){
        this.routerpara.paramMap.subscribe(data=>{
            this.id=data.get('id');
            // console.log("this is App Id :"+this.id);
        })
        this.apps = this.appsService.getAppsData();      
        this.apps.subscribe(data=>{
            this.appslist=data.apps;
            // console.log(this.appslist);
            this.app=this.appslist.filter((data:any)=>data.id==this.id)[0]; 
            // console.log(this.app); 
        });     
    }
}