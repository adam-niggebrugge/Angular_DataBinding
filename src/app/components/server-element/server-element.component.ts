import { Component, OnInit, Input, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-server-element',
  templateUrl: './server-element.component.html',
  styleUrls: ['./server-element.component.css'],
  encapsulation: ViewEncapsulation.Emulated //default it emulated, can be overwritten with none or shadowdom. Shadowdom allows for it to combine to all elements globably, angular will NOT apply the 'extra' selectors to elements it creates
})
export class ServerElementComponent implements OnInit {
  @Input("srvElement") element: {type: string, name: string, content: string};
  constructor() { }

  ngOnInit(): void {
  }

}
