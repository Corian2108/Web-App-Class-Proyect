import { Component, OnInit, Input } from '@angular/core';
import { Capital } from '../interfaces/capital.interface';

@Component({
  selector: 'app-capital-tabla',
  templateUrl: './capital-tabla.component.html',
  styleUrls: ['./capital-tabla.component.css']
})
export class CapitalTablaComponent implements OnInit {
  @Input() capitales:Capital[]=[];
  constructor() { }

  ngOnInit(): void {
  }

}
