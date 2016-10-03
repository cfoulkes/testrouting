import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule } from '@angular/router';


import { routeConfig }  from './app.route-config';
import { SharedModule } from './shared/shared.module';
import { AdminModule } from './admin/admin.module';
// import { LazyModule } from './lazy/lazy.module';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component'
import { ClientComponent } from './client/client.component'

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ClientComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    SharedModule,
    AdminModule,
    // LazyModule,
    RouterModule.forRoot(routeConfig)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
