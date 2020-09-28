//primero que debe tener un servici es el inyectable.
import {Injectable} from "@angular/core";
import {Zapatilla} from "../models/zapatilla";

@Injectable()
export class ZapatillaService{

    public zapatillas: Array<Zapatilla>;
    constructor(){
        this.zapatillas= [
            new Zapatilla("puma", 45,"pumita", "blanco", true ),
            new Zapatilla("nike", 67,"nikesitos", "azules", true ),
            new Zapatilla("adidas", 120,"pumita", "rojas", true ),
            new Zapatilla("nike Airmax", 190,"nike", "Amarillas",true),
            new Zapatilla("nike Runner", 567,"gucci", "Amarillas",false), 
      
          ];
    }


    //prueba
    /* getTexto(){
        return "hola mundo desde un servicio";
    } */
     
  getZapatillas():Array<Zapatilla>{
      return this.zapatillas;
  }



}