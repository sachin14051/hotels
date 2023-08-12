import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { TabComponent } from './shared/components/tab/tab.component';
import { NavbarComponent } from './shared/components/navbar/navbar.component';

@NgModule({
  declarations: [
    AppComponent,
    TabComponent,
    NavbarComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
