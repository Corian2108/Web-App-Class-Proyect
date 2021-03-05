import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'; 
import { Observable } from 'rxjs';
import { Region } from '../interfaces/region.interface';

@Injectable({
  providedIn: 'root'
})
export class RegionService {
private apiUrl:string="http://restcountries.eu/rest/v2/region";
  constructor(private http:HttpClient) { }

  buscarRegion(termino:string): Observable<any>{
    const url= `${this.apiUrl}/${termino}`
    return this.http.get<Region>(url);
  }
}