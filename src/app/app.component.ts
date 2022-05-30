import { Component } from '@angular/core';
import { MatDrawer } from '@angular/material/sidenav';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Makeev_lab3';

  opened = false;

  public sidenav!: MatDrawer; 

  public setSidenav (sidenav: MatDrawer) {
    this.sidenav = sidenav;
  };  
}
