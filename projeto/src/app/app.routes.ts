import {Routes} from '@angular/router'

import {HomeComponent} from './home/home.component'
import {BlogListagemComponent} from './blog-listagem/blog-listagem.component';
import {BlogSingleComponent} from './blog-single/blog-single.component';
import {PerfilComponent} from './perfil/perfil.component';

export const ROUTES: Routes = [
  {path:'', component: HomeComponent},
  {path:'blog', component: BlogListagemComponent},
  {path:'o-que-e-hackathon', component: BlogSingleComponent},
  {path:'user', component: PerfilComponent}
]
