import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { CodopComponent } from './components/codop/codop.component';
import { ServextComponent } from './components/servext/servext.component';
import { CombpalComponent } from './components/combpal/combpal.component';

@NgModule({
  declarations: [
    AppComponent,
    CodopComponent,
    ServextComponent,
    CombpalComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
