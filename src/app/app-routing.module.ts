import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EncabezadoComponent } from './componentes/encabezado/encabezado.component';
import { EducacionComponent } from './educacion/educacion.component';
import { ExperienciaComponent } from './experiencia/experiencia.component';
import { HabilidadesComponent } from './habilidades/habilidades.component';
import { ProyectosComponent } from './proyectos/proyectos.component';
import { FooterComponent } from './footer/footer.component';


const routes: Routes = [
  {path:'encabezado', component: EncabezadoComponent},
  {path:'experiencia', component: ExperienciaComponent},
  {path:'educacion', component: EducacionComponent},
  {path:'habilidades', component: HabilidadesComponent},
  {path:'proyectos', component: ProyectosComponent},
  {path:'footer', component: FooterComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
