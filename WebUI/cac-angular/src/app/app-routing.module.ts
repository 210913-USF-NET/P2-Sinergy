import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from '@auth0/auth0-angular';
import { LoginComponent } from './login/login.component';
import { UserListComponent } from './user-list/user-list.component';
import { PlaylistMakerComponent } from './playlist-maker/playlist-maker.component';
import { UserFormComponent } from './user-form/user-form.component';
import { MoreChartsComponent } from './more-charts/more-charts.component';
import { HomepageComponent } from './homepage/homepage.component';
import { PlaylistViewerComponent } from './playlist-viewer/playlist-viewer.component';

const routes: Routes = [
  {path: 'home', component: HomepageComponent },
  {path: 'login', component: LoginComponent },
  {path: 'user', component: UserFormComponent},
  {path: 'userlist', component: UserListComponent},
  {path: 'playlist-maker', component: PlaylistMakerComponent},
  {path: 'more-charts', component: MoreChartsComponent},
  {path: 'playlist/:id', component: PlaylistViewerComponent},
  {path: '', redirectTo: '/home', pathMatch: 'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }