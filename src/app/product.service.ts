import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import 'rxjs/add/operator/map';
import { Observable } from 'rxjs/internal/Observable';


@Injectable({
  providedIn: 'root'
})
export class ProductService {

  private _albumUrl = '../assets/album.json';
  
  constructor(private _http: HttpClient) { }

  getAlbum(id: number) {
    return response.json();
  }
}
