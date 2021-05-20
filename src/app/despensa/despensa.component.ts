import { Component, OnInit, OnDestroy } from '@angular/core';
import { NgForm } from '@angular/forms';

import { Subscription } from 'rxjs';

import { DespensaService } from './despensa.service';

@Component({
  selector: 'app-despensa',
  templateUrl: './despensa.component.html',
  styles: [
  ]
})
export class DespensaComponent implements OnInit, OnDestroy {

  subscription: Subscription;

  ingredientes: any[] = [];

  constructor(private despensaService: DespensaService) { }

  ngOnInit(): void {
	
	this.getIngredientes();

	this.subscription = this.despensaService.despensaChanged.subscribe(() => {
		this.getIngredientes();
	});
	
  }

  getIngredientes() {
	this.despensaService.getIngredientes().subscribe(ingredientes => {
		this.ingredientes =  ingredientes;
	});
  }

  addIngrediente(form: NgForm) {
	const ingrediente = {
		nome: form.value.nome,
		quantidade: parseFloat(form.value.quantidade)
	};
	this.despensaService.saveIngrediente(ingrediente);
	form.reset();
  }

  onRemoveIngredient(ingrediente_id: number) {
	this.despensaService.deleteIngrediente(ingrediente_id);
  }

  ngOnDestroy(): void {
	this.subscription.unsubscribe();
  }

}
