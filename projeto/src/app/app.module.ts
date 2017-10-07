import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { HttpModule } from '@angular/http'
import { RouterModule } from '@angular/router'

import { ROUTES } from './app.routes'

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { HomeComponent } from './home/home.component';
import { FooterComponent } from './footer/footer.component';
import { BlogListagemComponent } from './blog-listagem/blog-listagem.component';
import { BlogSingleComponent } from './blog-single/blog-single.component';
import { PerfilComponent } from './perfil/perfil.component';
import { HackathonListagemComponent } from './hackathon-listagem/hackathon-listagem.component';
import { HackathonSingleComponent } from './hackathon-single/hackathon-single.component';
import { LoginComponent } from './login/login.component';
import { CadastroComponent } from './cadastro/cadastro.component';
import { ShoppingListagemComponent } from './shopping-listagem/shopping-listagem.component';
import { ShoppingSingleComponent } from './shopping-single/shopping-single.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HomeComponent,
    FooterComponent,
    BlogListagemComponent,
    BlogSingleComponent,
    PerfilComponent,
    HackathonListagemComponent,
    HackathonSingleComponent,
    LoginComponent,
    CadastroComponent,
    ShoppingListagemComponent,
    ShoppingSingleComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(ROUTES)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
