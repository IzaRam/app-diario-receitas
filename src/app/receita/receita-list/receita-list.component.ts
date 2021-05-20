import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { ReceitaService } from '../receita.service';
import { Receita } from '../receita.model';


@Component({
  selector: 'app-receita-list',
  templateUrl: './receita-list.component.html'
})
export class ReceitaListComponent implements OnInit {

	receitas: Receita[] = [];

	constructor(private receitaService: ReceitaService, private router: Router) {} 

	ngOnInit() {
		this.receitaService.getRecipes().subscribe(receitas => {
			this.receitas = receitas;
		});
	}

	onReceitaSelected(receita: Receita) {
		this.router.navigate(['/receitas', receita.id]);
	}

}
