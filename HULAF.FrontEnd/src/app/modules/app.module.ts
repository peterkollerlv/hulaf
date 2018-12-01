import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { HulafServiceModule } from '../core/http/hulafServices.module';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import {HomeModule} from './home/home.module';
import {LocatorModule} from './locator/locator.module';
import {SubmiterModule} from './submiter/submiter.module';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    HulafServiceModule,
    AppRoutingModule,
    HomeModule,
    LocatorModule,
    SubmiterModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
