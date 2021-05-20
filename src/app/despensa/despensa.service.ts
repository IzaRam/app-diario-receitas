import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Observable, Subject  } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DespensaService {

  despensaChanged = new Subject<void>();

  constructor(private http: HttpClient) { }

  getIngredientes(): Observable<any[]> {
	return this.http.get<any[]>("http://127.0.0.1:8080/api/despensa.php");
  }

  saveIngrediente(ingrediente) {
	this.http.post("http://127.0.0.1:8080/api/despensa.php", ingrediente, {responseType: 'text'})
			.subscribe(response => {
				console.log(response);
				this.despensaChanged.next();
			},
			error => {
				if (error.status === 409) {
					alert("Ingrediente já adiconado na despensa!");
				}
			});
  }

  deleteIngrediente(id: number) {
	this.http.delete("http://127.0.0.1:8080/api/despensa.php?id=" + id, {responseType: 'text'})
			.subscribe(response => {
				console.log(response);
				this.despensaChanged.next();
			});
  }

 }
