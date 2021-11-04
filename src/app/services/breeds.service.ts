import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { RespuestaToHeadLines } from '../interfaces/interfaces';


@Injectable({
  providedIn: 'root'
})
export class BreedsService {
  

  constructor(private http: HttpClient) { }

  getTopHeadLines()
  {
    return this.http.get<RespuestaToHeadLines>('https://api.thecatapi.com/v1/images/search');
        
  }
}
