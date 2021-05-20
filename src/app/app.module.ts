import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { ReceitaListComponent } from './receita/receita-list/receita-list.component';
import { ReceitaComponent } from './receita/receita.component';
import { ReceitaNewComponent } from './receita/receita-new/receita-new.component';
import { DespensaComponent } from './despensa/despensa.component';
import { ReceitaDetailComponent } from './receita/receita-detail/receita-detail.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    ReceitaListComponent,
    ReceitaComponent,
    ReceitaNewComponent,
    DespensaComponent,
    ReceitaDetailComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
	HttpClientModule,
	FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
