import { Component, OnInit, DoCheck, OnDestroy } from '@angular/core';

@Component({
  selector: 'app-videojuego',
  templateUrl: './videojuego.component.html',
  styleUrls: ['./videojuego.component.css']
})
export class VideojuegoComponent implements OnInit,DoCheck,OnDestroy {

  public titulo: string;
  constructor() {
    this.titulo = "Hola david desde titulo";
   }

   

  ngOnInit(): void {
  }

  ngDoCheck(){
    /* console.log("doCheck ejecutado"); */
  }

  cambiarTitulo(){
    this.titulo = "nuevo titulo del componente"
  }

  ngOnDestroy(){
   /*  console.log("onDestroy ejecutado"); */
  }

}
