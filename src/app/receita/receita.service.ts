import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

import { Observable } from 'rxjs/';

import { Receita } from './receita.model';

@Injectable({
  providedIn: 'root'
})
export class ReceitaService {

  constructor(private http: HttpClient, private router: Router) { }

  getRecipes(): Observable<Receita[]> {
	return this.http.get<Receita[]>("http://localhost:8080/api/receitas.php");
  }

  getRecipeById(id: number): Observable<Receita> {
	return this.http.get<Receita>("http://localhost:8080/api/receitas.php?id=" + id);
  }

  addNewRecipe(receita: Receita): void {
	this.http.post("http://localhost:8080/api/receitas.php", receita, {responseType: 'text'}).subscribe(response => {
		console.log(response);
		this.router.navigate(['/receitas']);
	});
  }

}
