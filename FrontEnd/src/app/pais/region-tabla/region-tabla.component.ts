import { Component, OnInit,Input } from '@angular/core';
import { Region } from '../interfaces/region.interface';

@Component({
  selector: 'app-region-tabla',
  templateUrl: './region-tabla.component.html',
  styleUrls: ['./region-tabla.component.css']
})
export class RegionTablaComponent implements OnInit {
  @Input() regiones:Region[]=[];
  constructor() { }

  ngOnInit(): void {
  }

}
