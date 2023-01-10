import { Component } from '@angular/core';

 @Component({
   selector: 'app-user-profile',
   templateUrl: './user-profile.component.html',
   styleUrls: ['./user-profile.component.css']
 })


 export class UserProfileComponent {

  user = {

    name :'Doe',
    firstName :'John',
    age : 25,
    quote : '',
    photo : 'https://randomuser.me/api/portraits/lego/2.jpg' 

  }


// mettre un toggle aux class sur age
  
hidden(){

  const afficheAge = document.querySelector(".age") as HTMLParagraphElement;
  afficheAge.classList.toggle("vue")

}


}
