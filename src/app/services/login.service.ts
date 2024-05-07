import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class LoginService {
  constructor(private http: HttpClient) { }

  getData(formData: any): Observable<any> {
    // Realiza la solicitud  con los parámetros de consulta
    return this.http.post<any>('http://localhost:3000/client/login', formData);
  }

}
