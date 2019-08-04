import { Component } from '@angular/core';
import{AppsService} from '../../services/apps/apps.service';
import { Observable } from 'rxjs';

@Component({
    selector:'apps',
    templateUrl:'./apps.component.html',
    styleUrls:['./apps.component.css']
})

export class AppsComponent{
    constructor(private appsService:AppsService){}
    appslist;
    apps:Observable<any>;
    ngOnInit() {
      this.apps = this.appsService.getAppsData();      
      this.apps.subscribe(data=>{
            this.appslist=data.apps;
            //  console.log(this.appslist);
     });
   } 
}