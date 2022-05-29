import { Component, OnInit, Input } from '@angular/core';
import { MatDrawer } from '@angular/material/sidenav';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  @Input()
  public sidenavDrawer!: MatDrawer;
  constructor() { }

  ngOnInit(): void {
  }

}
