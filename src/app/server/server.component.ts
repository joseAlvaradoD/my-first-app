import { Component } from "@angular/core";

@Component({
  selector:'app-server',
  templateUrl:'./server.component.html',
  styles:[`
    .online{
      color:white;
    }
  `]
})
export class ServerComponent{

  serverId:number = Math.round(Math.random() * 100);
  serverStatus:string = "Offline";

  constructor(){
    this.serverStatus = Math.random()>0.5?'online':'offline';
  }

  getServerStatus():string{
    return this.serverStatus;
  }

  getColor():string{
    return this.serverStatus === 'online'?'green':'red';
  }
}
