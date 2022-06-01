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
import { MatInputModule } from '@angular/material/input';
import {MatButtonModule} from '@angular/material/button';
//import { JwtModule } from '@auth0/ng-jwt';

import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http'
import { DoctorService } from './doctor.service';
import { DoctorCardComponent } from './doctors/doctor-card/doctor-card.component';
import { MatFormFieldModule } from '@angular/material/form-field';
import { AUTH_API_URL } from './app-injection-token';
import { environment } from 'src/environments/environment';
import { JwtModule } from '@auth0/angular-jwt';
import { ACCESS_TOKEN_KEY } from './services/auth.service';
import { InterceptorService } from './services/interceptor.service';

export function tokenGetter(){
  return localStorage.getItem(ACCESS_TOKEN_KEY);
}

// const routes =[
//   { path: '', component: HomeComponent},
//   { path: 'home', component: HomeComponent},
//   { path: 'doctors', component: DoctorsComponent},
//   { path: 'user', component: UserComponent}
// ];

@NgModule({
  declarations: [
    AppComponent,
    UserComponent,
    HeaderComponent,
    HomeComponent,
    SidenavComponent,
    DoctorsComponent,
    DoctorCardComponent,
  ],
  imports: [
    BrowserModule,
    //RouterModule.forRoot(routes),
    AppRoutingModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatSidenavModule,
    MatInputModule,
    MatFormFieldModule,
    FormsModule,
    HttpClientModule,
    MatButtonModule,
  ],
  providers: [ DoctorService,
        {
          provide: HTTP_INTERCEPTORS,
          useClass: InterceptorService,
          multi:true,
        } ],
  bootstrap: [AppComponent]
})
export class AppModule {
 }
