//lo recomendable es que creemos el nombre del ts en singular.

export class Zapatilla{

    /*
     public nombre: string;
     public precio: number;
     public marca: string;
     public color: string;
     public stock: boolean;


     constructor(nombre,precio,marca,color,stock){
         this.nombre= nombre;
         this.marca= marca;
         this.color=color;
         this.precio= precio;
         this.stock= stock;
     }
     */

     // se puede definir una clase así tambien.
     constructor(
        public nombre: string,
        public precio: number,
        public marca: string,
        public color: string,
        public stock: boolean,
     ){}



}