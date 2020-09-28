import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule} from "@angular/forms"
import {appRoutingProviders, routing} from "./app.routing";
//importar el modulo http cliente , para trabajar con peticiones ajax
import {HttpClientModule} from "@angular/common/http";

import { AppComponent } from './app.component';
import { VideojuegoComponent } from './components/videojuego/videojuego.component';
import { ZapatillaComponent } from './components/zapatilla/zapatilla.component';
import { CursosComponent } from './components/cursos/cursos.component';
import { HomeComponent } from './components/home/home.component';
import { ExternoComponent } from './components/externo/externo.component';

import {CalculadoraPipe} from "./pipes/calculadora.pipe";
import { ContactoComponent } from './components/contacto/contacto.component';



@NgModule({
  declarations: [
    AppComponent,
    VideojuegoComponent,
    ZapatillaComponent,
    CursosComponent,
    HomeComponent,
    ExternoComponent,
    CalculadoraPipe,
    ContactoComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    routing,
    HttpClientModule
    
  ],
  providers: [
    appRoutingProviders
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
