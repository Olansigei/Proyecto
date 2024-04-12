import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
//import { JwtDto } from './jwt-dto.model'; // Asegúrate de tener definido este modelo según tu estructura de datos


@Injectable({
  providedIn: 'root'
})
export class APIService {

  private apiUrl = 'http://tu-api-url/auth'; // Actualiza con la URL correcta de tu API

  constructor(private http: HttpClient) { }

  l//ogin(nombreUsuario: string, password: string): Observable<JwtDto> {
   // const body = { nombreUsuario, password };
    //return this.http.post<JwtDto>(`${this.apiUrl}/login`, body);
  //}

//nuevoUsuario(nuevoUsuario: any): Observable<any> {
  //  return this.http.post<any>(`${this.apiUrl}/nuevo`, nuevoUsuario);
  //}

  actualizarUsuario(id: number, nuevoUsuario: any): Observable<any> {
    return this.http.put<any>(`${this.apiUrl}/usuarios/${id}`, nuevoUsuario);
  }

  listarUsuarios(): Observable<any[]> {
    return this.http.get<any[]>(`${this.apiUrl}/usuarios`);
  }
}//