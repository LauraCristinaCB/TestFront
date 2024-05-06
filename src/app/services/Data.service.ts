import { Injectable, Query } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(private http: HttpClient) { }

  getData(): Observable<any> {
    const params = new HttpParams().set('id', 1);

    // Realiza la solicitud GET con los parámetros de consulta
    return this.http.get<any>('http://localhost:3000/state', { params: params });
  }
}


