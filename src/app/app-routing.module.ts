import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PagosPrevisionalesComponent } from './pagos-previsionales/pagos-previsionales.component';

const routes: Routes = [
  { path: 'pagos-previsionales', component: PagosPrevisionalesComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
