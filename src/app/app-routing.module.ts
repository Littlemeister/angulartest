import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

/* COMPONENTS */
import { ShowDataComponent } from './show-data/show-data.component';

const routes: Routes = [
  {path:'data', component: ShowDataComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
