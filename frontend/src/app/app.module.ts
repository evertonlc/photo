import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HomeComponent } from './components/home.component';
import { PhotoListComponent } from './components/photo-list/photo-list.component';
import { SidePanelComponent } from './components/side-panel/side-panel.component';
import { PhotoService } from './services/photo.service';
import { HttpModule } from '@angular/http';
import { NavBarComponent } from './components/nav-bar/nav-bar.component';
import {AppRoutingModule} from './app.routing.module.';
import { RegisterComponent } from './components/register/register.component';
import {RegisterService} from './services/register.service';
import { LoginComponent } from './components/login/login.component';
import {LoginService} from "./services/login.service";
import { MyAlbumComponent } from './components/my-album/my-album.component';
import {UserService} from "./services/user.service";
import { AddPhotoComponent } from './components/add-photo/add-photo.component';
import {AddPhotoService} from "./services/add-photo.service";
import {UploadPhotoService} from "./services/upload-photo.service";

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    PhotoListComponent,
    SidePanelComponent,
    NavBarComponent,
    RegisterComponent,
    LoginComponent,
    MyAlbumComponent,
    AddPhotoComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    AppRoutingModule
  ],
  providers: [PhotoService, RegisterService, LoginService, UserService, AddPhotoService, UploadPhotoService],
  bootstrap: [AppComponent]
})
export class AppModule { }
