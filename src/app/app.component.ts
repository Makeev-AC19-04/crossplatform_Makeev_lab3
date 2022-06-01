import { Component } from '@angular/core';
import { MatDrawer } from '@angular/material/sidenav';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Makeev_lab3';

  opened = false;

  public sidenav!: MatDrawer; 

  constructor(private http:HttpClient){
  }

  
  public setSidenav (sidenav: MatDrawer) {
    this.sidenav = sidenav;
  };  
}
