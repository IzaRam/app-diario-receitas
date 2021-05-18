import { Component, OnInit } from '@angular/core';

import { ReceitaService } from './receita.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

	receitas: any = [];

	constructor(private receitaService: ReceitaService) {} 

	ngOnInit() {
		this.receitaService.getRecipes().subscribe(receitas => {
			this.receitas = receitas;
		});
	}

	onReceitaSelected(receita: any) {
		console.log(receita);
	}
	
}
