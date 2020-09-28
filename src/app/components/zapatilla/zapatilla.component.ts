import { Component, OnInit } from '@angular/core';
import{Zapatilla}from "../../models/zapatilla";
import {ZapatillaService} from "../../service/zapatilla.service";




@Component({
  selector: 'app-zapatilla',
  templateUrl: './zapatilla.component.html',
  styleUrls: ['./zapatilla.component.css'],
  providers: [ZapatillaService]
})
export class ZapatillaComponent implements OnInit {

  public titulo: string;
  public zapatillas: Array<Zapatilla>;
  public marcas: Array<string>;
  public color: string;
  public miMarca: string;


  constructor(
     private _zapatillaService: ZapatillaService

  ) { 
    this.color = "yellow";
    this.titulo= "componente de zapatillas";
    this.miMarca= "fila"

    this.marcas= new Array();

    


  }

  ngOnInit(){
       this.zapatillas= this._zapatillaService.getZapatillas();

       


    this.getMarcas();
  }

  getMarcas(){
    this.zapatillas.forEach((zapatilla,index)=>{
      if(this.marcas.indexOf(zapatilla.marca)<0){

        this.marcas.push(zapatilla.marca);
      }

     
    });

    console.log(this.marcas);
  }


  getMarca(){
     alert(this.miMarca)


  }

  addMarca(){
    this.marcas.push(this.miMarca)
  }

  DeleteMarca(index){
    //se puede borar un elemento de marca con este metodo.
      /* delete this.marcas[indice]; */

   //tambien se puede borrar con este metodo.
   this.marcas.splice(index,1)
  }

  //tipos de eventos:

  /* OnBlur(){
    console.log("has salido del input")
  } */


  mostrarPalabra(){
    alert(this.miMarca);
  }







}
