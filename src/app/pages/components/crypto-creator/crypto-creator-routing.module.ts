import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CreatorCollectionComponent } from './creator-collection/creator-collection.component';
import { CreatorCreateComponent } from './creator-create/creator-create.component';
import { CreatorMainComponent } from './creator-main/creator-main.component';
import { NftWalletComponent } from './nft-wallet/nft-wallet.component';


const routes: Routes = [
  {
    path: "",
    component: CreatorMainComponent,
    children: [
      {
        path: "collection",
        component: CreatorCollectionComponent,
      },
      {
        path: "collection/create-nft/:collection_id",
        component: CreatorCreateComponent,
      },
      {
        path:"nft-wallet",
        component:NftWalletComponent,
      }


    ],

  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CryptoCreatorRoutingModule { }
