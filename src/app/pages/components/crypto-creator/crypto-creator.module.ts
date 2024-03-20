import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CryptoCreatorRoutingModule } from './crypto-creator-routing.module';
import { CreatorMainComponent } from './creator-main/creator-main.component';
import { CreatorCreateComponent } from './creator-create/creator-create.component';
import { CoreModule } from 'src/app/core/core.module';
import { HeaderComponent } from '../header/header.component';
import { CreatorCollectionComponent } from './creator-collection/creator-collection.component';
import { NftWalletComponent } from './nft-wallet/nft-wallet.component';

@NgModule({
  declarations: [CreatorMainComponent, CreatorCreateComponent, CreatorCollectionComponent, NftWalletComponent],
  imports: [
    CommonModule,
    CryptoCreatorRoutingModule,
    CoreModule,
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class CryptoCreatorModule { }
