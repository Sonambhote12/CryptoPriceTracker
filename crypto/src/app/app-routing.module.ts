import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CoinDetailComponent } from './coin-detail/coin-detail.component';
import { CoinListComponent } from './coin-list/coin-list.component';

const routes: Routes = [
  {
    path: 'coin-list', component:CoinListComponent
  },
  {
    path: 'coin-detail', component:CoinDetailComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
