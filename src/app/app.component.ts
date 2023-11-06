import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
actions : Array<any> =[
   {title:"Home", "route": "/home", icon: "house"},
   {title:"Items", "route": "/items", icon: "search"},
   {title:"New-Item", "route": "/new-item", icon: "plus-circle"},
];
currentAction:any;

setCurrentAction(action:any) {
  this.currentAction = action;
}
}
