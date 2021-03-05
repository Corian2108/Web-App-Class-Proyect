import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'; 
import { Observable } from 'rxjs';
import { Capital } from '../interfaces/capital.interface';

@Injectable({
  providedIn: 'root'
})
export class CapitalService {
private apiUrl:string="https://restcountries.eu/rest/v2/capital";
  constructor(private http:HttpClient) { }

  buscarCapital(termino:string): Observable<any>{
    const url= `${this.apiUrl}/${termino}`
    return this.http.get<Capital>(url);
  }
}