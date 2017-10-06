import {Routes} from '@angular/router'

import {HomeComponent} from './home/home.component'
import {HackathonListagemComponent} from './hackathon-listagem/hackathon-listagem.component';
import {HackathonSingleComponent} from './hackathon-single/hackathon-single.component';
import {BlogListagemComponent} from './blog-listagem/blog-listagem.component';
import {BlogSingleComponent} from './blog-single/blog-single.component';
import {PerfilComponent} from './perfil/perfil.component';

export const ROUTES: Routes = [
  {path:'', component: HomeComponent},
  {path:'hackathons', component: HackathonListagemComponent},
  {path:'internet-das-coisas-para-todos', component: HackathonSingleComponent},
  {path:'blog', component: BlogListagemComponent},
  {path:'o-que-e-hackathon', component: BlogSingleComponent},
  {path:'user', component: PerfilComponent}
]
