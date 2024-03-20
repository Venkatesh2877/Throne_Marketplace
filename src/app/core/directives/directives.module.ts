import { NgModule, ModuleWithProviders, CUSTOM_ELEMENTS_SCHEMA } from "@angular/core";
import { CommonModule } from "@angular/common";
import { RouterModule } from "@angular/router";
import { AllowValuesDirective } from './allow-values/allow-values.directive';
// import { LiveChatComponent } from 'src/app/pages/layout/live-chat/live-chat/live-chat.component';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MatButtonModule, MatIconModule, MatInputModule, MatTooltipModule, MatProgressBarModule, MatSelectModule, MatCheckboxModule, MatAutocompleteModule, MatRadioModule } from '@angular/material';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { PickerModule } from '@ctrl/ngx-emoji-mart';
import { EmojiModule } from '@ctrl/ngx-emoji-mart/ngx-emoji';
// import { PaymentComponent } from 'src/app/pages/components/general/payment/payment.component';
import { GooglePlaceModule } from "ngx-google-places-autocomplete";
const Directives = [
  // LiveChatComponent,
  AllowValuesDirective,
  // PaymentComponent,
];
@NgModule({
  declarations: [...Directives],
  exports: [...Directives,
    GooglePlaceModule],
  imports: [
    CommonModule,
    RouterModule,
    MatButtonModule,
    MatIconModule,
    FlexLayoutModule,
    MatSelectModule,
    FormsModule,
    ReactiveFormsModule,
    MatInputModule,
    PickerModule,
    MatTooltipModule,
    EmojiModule,
    GooglePlaceModule,
    MatProgressBarModule,
    MatCheckboxModule,
    MatAutocompleteModule,
    MatRadioModule
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class DirectivesModule {
  static forRoot(): ModuleWithProviders {
    return <ModuleWithProviders>{
      ngModule: DirectivesModule,
      declarations: [...Directives],
      exports: [...Directives]
    };
  }
}
