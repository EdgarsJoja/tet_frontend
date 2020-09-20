import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ListComponent } from './components/currency/list/list.component';
import { CurrencyComponent } from './components/currency/currency/currency.component';


const routes: Routes = [
  { path: '', component: ListComponent },
  { path: 'currency/:id', component: CurrencyComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
