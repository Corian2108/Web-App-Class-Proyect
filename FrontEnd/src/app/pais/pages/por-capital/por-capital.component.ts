import { Component, OnInit } from '@angular/core';
import { CapitalService } from '../../services/capital.service';
import { Capital } from '../../interfaces/capital.interface';

@Component({
  selector: 'app-por-capital',
  templateUrl: './por-capital.component.html',
  styles: [
  ]
})
export class PorCapitalComponent {

  constructor(private api:CapitalService) { }
  termino:string="esto es una prueba";
hayError:Boolean=false;
capitales:Capital[]=[];
  
buscarCapital(termino:string){
this.termino=termino;
console.log(this.termino);
this.api.buscarCapital(termino).subscribe((capitales)=>{console.log(capitales);
this.capitales=capitales
}, (err)=>{this.hayError=true;
this.capitales=[]})
}

}
