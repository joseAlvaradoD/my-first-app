import { Component } from '@angular/core';

@Component({
  //selector: '[app-servers]'  select by attribute
  //selector: 'app-servers'  select by class
  selector: 'app-servers',
  template: `
    <app-server></app-server>
    <app-server></app-server>
  `,
  styleUrl: './servers.component.css'
})
export class ServersComponent {

}
