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
  serverName: string = "";
  username: string;
  serverCreated:boolean = false;
  servers:Array<string> = ['Server01', 'Server02'];

  constructor(){
    this.servers.push('Server03');
    setTimeout(()=>{this.allowNewServer = true}, 2000);
  }

  onCreateServer(event: Event):void{
    this.servers.push(this.serverName);
    this.serverCreated = true;

  }

  onUpdateServerName(event: Event):void{
    this.serverName = (<HTMLInputElement>event.target).value;
  }

  onResetUsername():void{
    this.username = '';
  }
}
