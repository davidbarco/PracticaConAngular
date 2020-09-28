//importar modulos del router de angular.

import { ModuleWithProviders } from "@angular/core";

import {Routes, RouterModule} from "@angular/router";


//importar los componentes.

import{ZapatillaComponent} from "./components/zapatilla/zapatilla.component";
import{VideojuegoComponent} from "./components/videojuego/videojuego.component";
import{CursosComponent} from "./components/cursos/cursos.component";
import { HomeComponent } from './components/home/home.component';
import { ExternoComponent } from './components/externo/externo.component';
import { ContactoComponent } from './components/contacto/contacto.component';



//array de rutas

const appRoutes: Routes=[
     {path: "", component: HomeComponent},
     {path: "home", component: HomeComponent},
     {path: "zapatillas", component: ZapatillaComponent},
     {path: "cursos", component: CursosComponent},
     {path: "cursos/:nombre/:followers", component: CursosComponent},
     {path: "videojuegos", component: VideojuegoComponent},
     {path: "externo", component: ExternoComponent},
     {path: "contacto", component: ContactoComponent},
     //ruta de 404 de cuando no encuentra ninguna ruta
     {path: "**", component: HomeComponent},
     
];

//exportar el modulo del router
export const appRoutingProviders: any[] = [];
export const routing: ModuleWithProviders<any> = RouterModule.forRoot(appRoutes);
