import { Component, OnInit, Input, ViewEncapsulation, OnChanges, SimpleChanges, DoCheck } from '@angular/core';

@Component({
  selector: 'app-server-element',
  templateUrl: './server-element.component.html',
  styleUrls: ['./server-element.component.css'],
  encapsulation: ViewEncapsulation.Emulated //default it emulated, can be overwritten with none or shadowdom. Shadowdom allows for it to combine to all elements globably, angular will NOT apply the 'extra' selectors to elements it creates
})
export class ServerElementComponent implements OnInit, OnChanges, DoCheck {
  @Input("srvElement") element: {type: string, name: string, content: string};
  @Input() name: string;

  constructor() {
    console.log('constructor called');
   }

  /**
   * Only hook that receives arguments
   * This will always run first
   */
  ngOnChanges(changes: SimpleChanges) {
    console.log(`What is in the changes??`);
    console.log(changes);
    console.log('ngOnChanges');
  }

  ngOnInit(): void {
    console.log('ngOnInit called');
  }

  ngDoCheck() {
    console.log('Do checked called');
  }
}
