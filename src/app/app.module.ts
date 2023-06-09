import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';
import { HeroComponent } from './hero/hero.component';

@NgModule({
  imports:      [ BrowserModule, FormsModule ],
  declarations: [ AppComponent, HelloComponent , HeroComponent , AppRoutingModule ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
