import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from '@auth0/auth0-angular';
import { LoginComponent } from './login/login.component';
import { UserListComponent } from './user-list/user-list.component';
import { PlaylistMakerComponent } from './playlist-maker/playlist-maker.component';
import { UserFormComponent } from './user-form/user-form.component';




const routes: Routes = [
  {path: 'login', component: LoginComponent },
  {path: 'users/:mode/:id', component: UserFormComponent},
  {path: 'users', component: UserListComponent},
  {path: 'playlist-maker', component: PlaylistMakerComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
