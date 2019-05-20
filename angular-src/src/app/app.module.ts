import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import { FormsModule } from '@angular/forms'; 
import {HttpModule, Http} from '@angular/http';
import { YoutubePlayerModule } from 'ng2-youtube-player';
import {Angular2FontawesomeModule} from 'angular2-fontawesome/angular2-fontawesome';
import { Ng2DragDropModule } from 'ng2-drag-drop';

import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';
import { HomeComponent } from './components/home/home.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { ProfileComponent } from './components/profile/profile.component';
import { PlayerComponent } from './components/player/player.component';
import { PlaylistComponent } from './components/playlist/playlist.component';

import {ValidateService} from './services/validate.service';
import {AuthService} from './services/auth.service';
import {FlashMessagesModule} from 'angular2-flash-messages';
import {FlashMessagesService} from 'angular2-flash-messages';
import {AuthGuard} from './guards/auth.guard';
import {UnauthGuard} from './guards/unauth.guard';
import {VideoService} from './services/video.service';

const appRoutes: Routes = [
    {path:'', component: LoginComponent,canActivate:[UnauthGuard]},
    {path:'home', component: HomeComponent,canActivate:[AuthGuard]},
    {path:'register', component: RegisterComponent,canActivate:[UnauthGuard]},
    {path:'login', component: LoginComponent,canActivate:[UnauthGuard]},
    {path:'dashboard', component: DashboardComponent, canActivate:[AuthGuard]},
    {path:'profile', component: ProfileComponent, canActivate:[AuthGuard]},
    {path:'player/:id_playlist/:track', component: PlayerComponent, canActivate:[AuthGuard]},
    {path:'playlist/:id_playlist', component: PlaylistComponent, canActivate:[AuthGuard]} 
]

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    LoginComponent,
    RegisterComponent,
    HomeComponent,
    DashboardComponent,
    ProfileComponent,
    PlayerComponent,
    PlaylistComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(appRoutes),
    BrowserModule, FormsModule,
    FlashMessagesModule,
    HttpModule,
    YoutubePlayerModule,
    Angular2FontawesomeModule,
    Ng2DragDropModule.forRoot()
  ],
  providers: [
    ValidateService,
    FlashMessagesService, 
    AuthService, 
    AuthGuard, 
    UnauthGuard, 
    VideoService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
