import { Component,Output,EventEmitter } from '@angular/core';

@Component({
  selector: 'app-region-input',
  templateUrl: './region-input.component.html',
  styleUrls: ['./region-input.component.css']
})
export class RegionInputComponent{
  @Output() onEnter:EventEmitter<string>= new EventEmitter();
  termino:string='';
  buscarRegion(){
    this.onEnter.emit(this.termino);
  }
}
