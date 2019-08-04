import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, Subject } from 'rxjs';
import { User } from './user';
import { Inject} from '@angular/core';
import { SESSION_STORAGE, StorageService } from 'angular-webstorage-service';
 
const STORAGE_KEY = 'user-info';
@Injectable({
  providedIn: 'root'
})
export class UserService {
  public UserData: User;
  public userDataSubject = new Subject<User>();

  constructor(private http: HttpClient,@Inject(SESSION_STORAGE) private storage: StorageService) {

  }

   set(value){
    
     console.log("in session set=-----------......>>>>>", value);
   
     this.http.post("http://localhost:4300/api/users",JSON.parse(value)).subscribe((data)=>{
       console.log("inserted succesfully",data);
       
     })

     this.storage.set(STORAGE_KEY,value)

   }
   get()
   {
    return this.storage.get(STORAGE_KEY)
   }

  public getUserData() {
    // console.log(this.UserData.id,"userAs");
    
    return this.userDataSubject.asObservable();
  }

}
