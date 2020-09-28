import {Injectable} from "@angular/core";
//permiten hacer peticiones ajax a un servicio externo, a una url externa y poder moficiar las cabeceras de esas peticiones
import {HttpClient, HttpHeaders} from "@angular/common/http";
//recojiendo informacion que devuelve el api rest.
import {Observable} from "rxjs";

@Injectable()
export class PeticionesService{

    public url: string;

    
    
    constructor(
    public _http: HttpClient
   ){

     this.url= "https://reqres.in/";


   }

   getUser(userId): Observable<any>{
       return this._http.get(this.url + "api/users/" + userId);
   }


   //metodo post

   addUser(user): Observable<any>{
         //peticion ajax- convertir un objeto a un json string.
         let params = JSON.stringify(user);
         let headers = new HttpHeaders().set("Content-Type", "application/json");

         return this._http.post(this.url + "api/users", params, {headers: headers});
   }



}





