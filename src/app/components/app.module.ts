import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule }   from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { LogInModule } from '../components/login/login.module';

// Imports for loading & configuring the in-memory web api
import { AppComponent } from './app.component';
import { NavBarComponent } from './navBar/navBar.Component';
import { BrotherSearchComponent } from '../components/search/brotherSearch.component';
import { LoggedInComponent } from '../components/loggedin/loggedin.component';

import { UserService } from '../services/user.service';

//prime ng
import {OverlayPanelModule, AutoCompleteModule} from 'primeng/primeng';
//material
import {MaterialModule} from '@angular/material';


// Add the RxJS Observable operators we need in this app.
import '../rxjs-operators';

@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    LogInModule,
    OverlayPanelModule,
    AutoCompleteModule,
    MaterialModule.forRoot()
  ],
  declarations: [
    AppComponent,
    NavBarComponent,
    BrotherSearchComponent,
    LoggedInComponent
  ],
  providers: [
    UserService
  ],
  bootstrap: [ AppComponent ]
})
export class AppModule {
}