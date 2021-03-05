import { Component, OnInit } from '@angular/core';
import { RegionService } from '../../services/region.service';
import { Region } from '../../interfaces/region.interface';

@Component({
  selector: 'app-por-region',
  templateUrl: './por-region.component.html',
  styles: [
  ]
})
export class PorRegionComponent  {

  constructor(private api:RegionService) { }
termino:string="esto es una prueba";
hayError:Boolean=false;

regiones:Region[]=[];

buscarRegion(termino:string){
this.termino=termino;
console.log(this.termino);
this.api.buscarRegion(termino).subscribe((regiones)=>{console.log(regiones);
this.regiones=regiones
},(err)=>{this.hayError=true;
this.regiones=[]})
}
  

}
