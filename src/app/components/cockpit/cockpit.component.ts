import { Component, ElementRef, EventEmitter, OnInit, Output, ViewChild } from '@angular/core';

@Component({
  selector: 'app-cockpit',
  templateUrl: './cockpit.component.html',
  styleUrls: ['./cockpit.component.css']
})
export class CockpitComponent implements OnInit {
  @Output() serverCreated = new EventEmitter<{serverName: string, serverContent: string}>();
  @Output("bpCreated") blueprintCreated = new EventEmitter<{serverName: string, serverContent: string}>();
  
  // newServerName = '';
  // newServerContent = '';
  @ViewChild('serverContent', {static: true}) serverContent: ElementRef;

  constructor() { }

  ngOnInit(): void {
  }
  
  onAddServer(nameInput: HTMLInputElement, contentInput: HTMLInputElement) {
    console.log(this.serverContent)
    this.serverCreated.emit({
      serverName: nameInput.value, 
      serverContent: this.serverContent.nativeElement.value,
    });
  }

  onAddBlueprint(nameInput: HTMLInputElement, contentInput: HTMLInputElement) {
    this.blueprintCreated.emit({
      serverName: nameInput.value, 
      serverContent: contentInput.value
    });
  }
}
