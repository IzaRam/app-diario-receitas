import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ReceitaService {

  constructor(private http: HttpClient) { }

  getRecipes() {
	return this.http.get("http://localhost:8080/api/receitas.php");
  }
}
