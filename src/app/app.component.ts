import { Component } from '@angular/core';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ]
})
export class AppComponent  {
  name = 'Angular 6';
  items:any[]=[];
  constructor(){

   for(var a = 0; a <= 100 ; a++){
     if(a == 6){
      this.items.push("It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal  .");
     }
    this.items.push(a);
   }
  }
}
