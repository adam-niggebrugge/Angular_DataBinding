import { Component, OnInit, Input, ViewEncapsulation, OnChanges, SimpleChanges, DoCheck, AfterContentInit, AfterContentChecked, AfterViewInit, AfterViewChecked, OnDestroy } from '@angular/core';

@Component({
  selector: 'app-server-element',
  templateUrl: './server-element.component.html',
  styleUrls: ['./server-element.component.css'],
  encapsulation: ViewEncapsulation.Emulated //default it emulated, can be overwritten with none or shadowdom. Shadowdom allows for it to combine to all elements globably, angular will NOT apply the 'extra' selectors to elements it creates
})
export class ServerElementComponent 
  implements OnInit, 
  OnChanges, 
  DoCheck, 
  AfterContentInit, 
  AfterContentChecked, 
  AfterViewInit, 
  AfterViewChecked,
  OnDestroy {
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
    console.log(changes);
    console.log('ngOnChanges');
  }

  ngOnInit(): void {
    console.log('ngOnInit called');
  }

  /**
   * This will be called multiple times in development mode.
   * If code inside ngDoCheck is intensive that will affect performance
   */
  ngDoCheck() {
    console.log('Do checked called');
  }

  ngAfterContentInit(){
    console.log('ngAfterConentInit is called')
  }

  ngAfterContentChecked(){
    console.log('ngAfterconent**CHECKED** is called')
  }

  ngAfterViewInit(){
    console.log('ngAfter*View*Init** is called')
  }

  ngAfterViewChecked(){
    console.log('ngAfter**View**Checked*** is called')
  }

  ngOnDestroy(): void {
      console.log(`On Destroy Called`)
  }
}
