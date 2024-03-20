import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BuyticketsComponent } from './buytickets/buytickets.component';
import { CryptoBidComponent } from './crypto-bid/crypto-bid.component';
import { CryptoEventComponent } from './crypto-event/crypto-event.component';
import { CryptoListsComponent } from './crypto-lists/crypto-lists.component';
import { FanMainComponent } from './fan-main/fan-main.component';


const routes: Routes = [
  {
    path: "",
    component: FanMainComponent,
    children: [
      {
        path: "",
        component: CryptoListsComponent,
      },
      {
        path: "fan/lists/:id",
        component: CryptoEventComponent,
      },
      {
        path: "fan/buytickets",
        component: BuyticketsComponent,
      },
      {
        path: "lists/bid/:id/:nft_type",
        component: CryptoBidComponent,
      },


    ],

  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CryptoFanRoutingModule { }
