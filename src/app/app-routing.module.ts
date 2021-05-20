import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { ReceitaListComponent } from './receita/receita-list/receita-list.component';
import { ReceitaNewComponent } from './receita/receita-new/receita-new.component';
import { DespensaComponent } from './despensa/despensa.component';

const routes: Routes = [
	{ path: '', redirectTo: 'receitas', pathMatch: 'full' },
	{ path: 'receitas', component: ReceitaListComponent },
	{ path: 'adicionar', component: ReceitaNewComponent },
	{ path: 'despensa', component: DespensaComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
