import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {Routes, RouterModule} from '@angular/router';
import {MatToolbarModule} from '@angular/material/toolbar'; 
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { UserComponent } from './user/user.component';
import { HeaderComponent } from './header/header.component';
import { HomeComponent } from './home/home.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NavbarComponent } from './navbar/navbar.component';
import { MatSidenavModule } from '@angular/material/sidenav';
import { SidenavComponent } from './sidenav/sidenav.component';
import { DoctorsComponent } from './doctors/doctors.component';

import { HttpClientModule } from '@angular/common/http'
import { DoctorService } from './doctor.service';

const routes =[
  { path: '', component: HomeComponent},
  { path: 'home', component: HomeComponent},
  { path: 'doctors', component: DoctorsComponent}
];

@NgModule({
  declarations: [
    AppComponent,
    UserComponent,
    HeaderComponent,
    HomeComponent,
    SidenavComponent,
    DoctorsComponent,
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes),
    AppRoutingModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatSidenavModule,
    FormsModule,
    HttpClientModule,
  ],
  providers: [ DoctorService ],
  bootstrap: [AppComponent]
})
export class AppModule {
 }
