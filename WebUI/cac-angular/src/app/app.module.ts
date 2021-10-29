import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AuthModule } from '@auth0/auth0-angular';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PlaylistMakerComponent } from './playlist-maker/playlist-maker.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { LoginComponent } from './login/login.component';
import { HttpClientModule } from '@angular/common/http';
import { UserListComponent } from './user-list/user-list.component';
import { environment } from 'src/environments/environment';
import { AuthComponent } from './auth/auth.component';
import { UserFormComponent } from './user-form/user-form.component';
import { SpotifyLoginComponent } from './spotify-login/spotify-login.component';
import { MoreChartsComponent } from './more-charts/more-charts.component';
import { HomepageComponent } from './homepage/homepage.component';
import { CommonModule } from '@angular/common';
import { EmbedPlaylistComponent } from './embed-playlist/embed-playlist.component';
import { FormsModule } from '@angular/forms';
import { PlaylistViewerComponent } from './playlist-viewer/playlist-viewer.component';





@NgModule({
  declarations: [
    AppComponent,
    PlaylistMakerComponent,
    NavBarComponent,
    LoginComponent,
    UserListComponent,
    AuthComponent,
    UserFormComponent,
    SpotifyLoginComponent,
    MoreChartsComponent,
    HomepageComponent,
    EmbedPlaylistComponent,
    PlaylistViewerComponent,
    
    
  ],
  imports: [
    BrowserModule,
    CommonModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    AuthModule.forRoot({
      domain: environment.authDomain,
      clientId: environment.authClientId
    })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
