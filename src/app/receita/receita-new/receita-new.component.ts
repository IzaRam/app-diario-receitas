import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

import { ReceitaService } from '../receita.service';
import { Receita } from '../receita.model';

@Component({
  selector: 'app-receita-new',
  templateUrl: './receita-new.component.html'
})
export class ReceitaNewComponent implements OnInit {

  constructor(private receitaService: ReceitaService) { }

  ngOnInit(): void {
  }

  addNewRecipe(receita: NgForm) {
	const recipe = new Receita(0, receita.value.nome, receita.value.imageUrl, receita.value.descricao);
	this.receitaService.addNewRecipe(recipe);
	receita.reset();
  }

}
