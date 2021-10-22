import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AuthModule } from '@auth0/auth0-angular';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PlaylistMakerComponent } from './playlist-maker/playlist-maker.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { LoginComponent } from './login/login.component';
<<<<<<< HEAD
import { HttpClientModule } from '@angular/common/http';
import { UserListComponent } from './user-list/user-list.component';
=======
import { environment } from 'src/environments/environment';
import { AuthComponent } from './auth/auth.component';
>>>>>>> 1c30c845653a5f4f24dc13dcd061cede79df464d

@NgModule({
  declarations: [
    AppComponent,
    PlaylistMakerComponent,
    NavBarComponent,
    LoginComponent,
<<<<<<< HEAD
    UserListComponent
=======
    AuthComponent
>>>>>>> 1c30c845653a5f4f24dc13dcd061cede79df464d
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
<<<<<<< HEAD
    HttpClientModule
=======
    AuthModule.forRoot({
      domain: environment.authDomain,
      clientId: environment.authClientId
    })
>>>>>>> 1c30c845653a5f4f24dc13dcd061cede79df464d
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
