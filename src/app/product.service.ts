import { Injectable } from '@angular/core';
import { HttpClient, HttpResponse } from '@angular/common/http';

import 'rxjs/add/operator/map';
import { catchError, map, throwError } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class ProductService {

  private _albumUrl = '../assets/album.json';
  
  constructor(private _http: HttpClient) { }

  getAlbum(id: number) {
    return this._http.get(this._albumUrl)
    .pipe(
           map((data) => {
             return data;
           }), catchError( error => {
             return throwError( 'Something went wrong!' );
           })
        );
   }
}
