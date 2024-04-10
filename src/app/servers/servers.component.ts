import { Component } from '@angular/core';

@Component({
  //selector: '[app-servers]'  select by attribute
  //selector: 'app-servers'  select by class
  selector: 'app-servers',
  templateUrl:'./servers.component.html',
  styleUrl: './servers.component.css'
})
export class ServersComponent {
  allowNewServer:boolean = false;
  serverName: string = "Initial server name";
  username: string;
  constructor(){
    setTimeout(()=>{this.allowNewServer = true}, 2000);
  }

  onCreateServer():void{
    alert('Server was created! Name is ' + this.serverName);
  }

  onUpdateServerName(event: Event):void{
    this.serverName = (<HTMLInputElement>event.target).value;
  }

  onResetUsername():void{
    this.username = '';
  }
}
