import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from '@auth0/auth0-angular';
import { LoginComponent } from './login/login.component';
import { UserListComponent } from './user-list/user-list.component';
import { PlaylistMakerComponent } from './playlist-maker/playlist-maker.component';
import { ChartsComponent } from './charts/charts.component';



const routes: Routes = [
  {path: 'login', component: LoginComponent },
  {path: 'users', component: UserListComponent},
  {path: 'playlist-maker', component: PlaylistMakerComponent},
  {path: 'charts', component: ChartsComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
