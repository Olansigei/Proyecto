import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CatalogoService {

  constructor(private http: HttpClient) { }

  getProducts() {
    const token = JSON.parse(localStorage.getItem("token"))
    console.log(token)
    
    const headers = {
        'Authorization': `Bearer ${token}`
    };

    return this.http.get("https://calabozoapi.onrender.com/producto/lista", { headers: headers });
}
}
