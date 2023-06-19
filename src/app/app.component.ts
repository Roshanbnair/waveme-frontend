import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'waveme';
  bool: boolean = false;

  menu() {
    this.bool = !this.bool;
  }
}
