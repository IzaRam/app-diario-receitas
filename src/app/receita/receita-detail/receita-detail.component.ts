import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { Subscription } from 'rxjs';

import { ReceitaService } from '../receita.service'
import { Receita } from '../receita.model';

@Component({
  selector: 'app-receita-detail',
  templateUrl: './receita-detail.component.html',
  styles: []
})
export class ReceitaDetailComponent implements OnInit, OnDestroy {

  id: number;
  receita: Receita;
  subscription: Subscription;

  constructor(private route: ActivatedRoute, private receitaService: ReceitaService) { }

  ngOnInit(): void {
	this.subscription = this.route.params.subscribe(params => {
		this.id = +params['id'];
		this.getReceita(this.id);
	});
  }

  getReceita(id: number) {
	this.receitaService.getRecipeById(id).subscribe(receita => {
		this.receita = receita;
	});
  }

  ngOnDestroy(): void {
	this.subscription.unsubscribe();
  }

}
