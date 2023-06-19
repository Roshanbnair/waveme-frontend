import { Component,EventEmitter,Output,Input } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {


  
  @Output() menuBtnClicked = new EventEmitter();
  @Input() bool: any;
  menu() {
    this.menuBtnClicked.emit();
    console.log('emitted from header', this.bool);
  }
 
  
}