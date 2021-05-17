import { Component, ElementRef, EventEmitter, OnInit, Output, ViewChild } from '@angular/core';

@Component({
  selector: 'app-cockpit',
  templateUrl: './cockpit.component.html',
  styleUrls: ['./cockpit.component.css']
})
export class CockpitComponent implements OnInit {
 @Output() serverCreated = new EventEmitter<{serverName:string, serverContent:string}>(); // difine the type what you want to emit
 @Output() blueprintCreated= new EventEmitter<{serverName:string, serverContent:string}>();
  // newServerName = '';
  // newServerContent = '';
 @ViewChild('serverComponentInput', {static:true}) serverComponentInput:ElementRef
     constructor() { }

  ngOnInit(): void {
  }
  onAddServer(nameInput:HTMLInputElement) {
     
     this.serverCreated.emit({
      serverName:nameInput.value,
      serverContent:this.serverComponentInput.nativeElement.value
    })
  }

  onAddBlueprint(nameInput:HTMLInputElement) {
    this.blueprintCreated.emit({
      serverName:nameInput.value,
      serverContent:this.serverComponentInput.nativeElement.value
    })
  }
}
