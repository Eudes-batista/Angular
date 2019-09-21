import { EstadoCadastroComponent } from './estado-cadastro/estado-cadastro.component';
import { EstadoComponent } from './estado.component';
import { NgModule} from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


const routes: Routes = [
  {path: '', component: EstadoComponent},
  {path: 'novo', component: EstadoCadastroComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class EstadoRoutingModule { }
