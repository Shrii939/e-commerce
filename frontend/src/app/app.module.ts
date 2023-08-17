import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/modularElements/header/header.component';
import { HomeComponent } from './components/pages/home/home.component';
import { SupportComponent } from './components/pages/support/support.component';
import { FooterComponent } from './components/modularElements/footer/footer.component';
import { SearchComponent } from './components/modularElements/search/search.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HomeComponent,
    SupportComponent,
    FooterComponent,
    SearchComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
