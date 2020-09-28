import {Pipe, PipeTransform}  from "@angular/core"

@Pipe({
    name: "calculadora"
})
export class CalculadoraPipe implements PipeTransform{

    //dato | calculadora: otroDato
    //params1             params2
    transform(value: any, valueTwo: any){
        let operaciones = `
         suma: ${value +valueTwo} 
         resta: ${value - valueTwo} 
         multiplicacion: ${value * valueTwo} 
         division:${value / valueTwo}

        
        `;

        return operaciones;
    }
}


