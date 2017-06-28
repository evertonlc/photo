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

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    PhotoListComponent,
    SidePanelComponent,
    NavBarComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    AppRoutingModule
  ],
  providers: [PhotoService],
  bootstrap: [AppComponent]
})
export class AppModule { }
