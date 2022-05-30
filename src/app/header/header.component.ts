import { Component, OnInit, Input } from '@angular/core';
import {MatToolbarModule} from '@angular/material/toolbar';
import { MatDrawer } from '@angular/material/sidenav';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  public title= "Медицинский центр"

  @Input()
  public toggleSidenav(){
    
  }
  constructor() { }

  ngOnInit(): void {
  }

}
