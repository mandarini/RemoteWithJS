import { Component, OnInit } from '@angular/core';
import { ChatService } from './chat.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'app';

  constructor(private chat: ChatService){
    window.addEventListener('devicemotion', function(event) {
      let x = event.accelerationIncludingGravity.x;
      let y = event.accelerationIncludingGravity.y;
      let z = event.accelerationIncludingGravity.z;
      console.log(x);
      document.getElementById("phone").innerHTML=x;
      chat.sendMsg(x);
    }, true);
  }

  ngOnInit() {
    this.chat.messages.subscribe(msg => {
      console.log('my msg',msg);
    })
  }

  sendMessage(msg) {
    this.chat.sendMsg("Test Message" + msg);
  }

}
