import {Component} from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import {
    AuthService,
    GoogleLoginProvider,
} from 'angular-6-social-login-v2'; 

 
import { UserService } from '../../services/user/user.service';
import { User } from '../../services/user/user';
@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.css'],
})
export class SigninComponent{
 
  constructor(private route: ActivatedRoute,
    private router: Router, private socialAuthService: AuthService, private userService: UserService ) {}
  
  public socialSignIn(socialPlatform : string) {
    let socialPlatformProvider;
    if(socialPlatform == "google"){
      socialPlatformProvider = GoogleLoginProvider.PROVIDER_ID;
    }
    this.socialAuthService.signIn(socialPlatformProvider).then(
      (userData) => {
        console.log('User signin success .........')
        console.log(socialPlatform+" sign in data : " , userData);
        // Now sign-in with userData
        // ...
        let u = new User();
        u.id= userData.id;
        u.name= userData.name;
        u.email= userData.email;
        u.imgUrl=userData.image;

        this.userService.userDataSubject.next(u);
        
        console.log(typeof u);
 this.userService.set(JSON.stringify(u))
    
       
        // navigate to desktop page..
        this.router.navigate(['/userdesktop']);
      }
    );
  }

  public socialSignOut(socialPlatform : string) {
    let socialPlatformProvider;
    if(socialPlatform == "google"){
      socialPlatformProvider = GoogleLoginProvider.PROVIDER_ID;
    }
    this.socialAuthService.signOut().then((data)=>{
        console.log('Success fully logged out');
    });
  }

}