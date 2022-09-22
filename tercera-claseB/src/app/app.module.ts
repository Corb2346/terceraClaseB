import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PrimeroComponent } from './components/primero/primero.component';
import { ColorDirective } from './libs/directivas/color.directive';
import { DynamicColorDirective } from './libs/directivas/dynamic-color.directive';

@NgModule({
  declarations: [
    AppComponent,
    PrimeroComponent,
    ColorDirective,
    DynamicColorDirective
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
