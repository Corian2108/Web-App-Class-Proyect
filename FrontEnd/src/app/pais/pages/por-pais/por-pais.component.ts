import { Component, OnInit } from '@angular/core';
import { PaisService } from '../../services/pais.service';
import { Country} from '../../interfaces/pais.interface';
@Component({
  selector: 'app-por-pais',
  templateUrl: './por-pais.component.html',
  styles: [
  ]
})
export class PorPaisComponent  {

  constructor(private api:PaisService){
    
  }
 termino:string="esto es una prueba";
 hayError:Boolean=false;
 paises:Country[]=[];
  buscar(termino:string){
    this.termino=termino;
    console.log(this.termino)
    this.api.buscarPais(termino)
    .subscribe((paises)=>{console.log(paises);
      this.paises=paises
    },(err)=>{this.hayError=true; 
      this.paises=[]})
  }
}
