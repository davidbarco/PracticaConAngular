import { Component, OnInit } from '@angular/core';
//importo el servicio y lo cargo en los providers.
import {PeticionesService} from "../../service/peticiones.service";



@Component({
  selector: 'app-externo',
  templateUrl: './externo.component.html',
  styleUrls: ['./externo.component.css'],
  providers: [PeticionesService]
})
export class ExternoComponent implements OnInit {


  public user: any;
  public userId: any;
  public fecha: any;

  public new_user: any;

  public usuario_guardado: any;

  constructor(
    private _peticionesService: PeticionesService
  ) {
      this.userId = 3;

      this.new_user= {
        "name": "",
        "job": ""
    }
   }

  ngOnInit(): void {
    this.fecha = new Date(2020,9,27);

     this.cargaUsuario();
  }



  cargaUsuario(){
    //el metodo subscribe tiene dos metodos de callback
    this._peticionesService.getUser(this.userId).subscribe(
      //una que recoje el resultado
      result =>{
         this.user = result.data;
      },
      //otra que recoje el error
      error =>{
        console.log(<any>error)
      }       
    

   );


  }





  onSubmit(form){
     this._peticionesService.addUser(this.new_user).subscribe(
         response=>{
                 this.usuario_guardado = response
                 console.log(this.usuario_guardado)

                 form.reset()
         },
         error =>{
           console.log(<any>error)
         }
     );
  }





}
