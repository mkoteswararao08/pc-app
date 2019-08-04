import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, NavigationStart } from '@angular/router';
import { UserService } from '../../../services/user/user.service';
import { User } from '../../../services/user/user';

@Component({
  selector: 'user-desktop',
  templateUrl: './userdesktop.component.html',
  styleUrls: ['./userdesktop.component.css'],
})
export class UserDesktopComponent implements OnInit {

  userData: User = new User();
  constructor(private route: ActivatedRoute,
    private router: Router, private userService: UserService) { }

  ngOnInit() {
    this.route.params.subscribe(params => {
      console.log('UserDesktopComponent--');
      console.log(this.userData);
    
    });
    
    // this.userService.getUserData().subscribe(data => {
      var data = this.userService.get()
       
      this.userData = JSON.parse(data);
      console.log('Recived user data-->', this.userData);
    // })
    
   
  }
  viewImg(userImg)
  {
    window.open(userImg,"_blank")
  
  }

  
 

}
