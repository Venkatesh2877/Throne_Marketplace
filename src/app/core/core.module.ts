
import { CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA } from "@angular/core";
import { FlexLayoutModule } from "@angular/flex-layout";
import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { AppService } from "./services/app.service";
import { ModuleWithProviders } from "@angular/compiler/src/core";
import { DirectivesModule } from "./directives/directives.module";
import { MatExpansionModule } from '@angular/material/expansion';
import { CarouselModule } from 'ngx-bootstrap/carousel';
import { PickerModule } from '@ctrl/ngx-emoji-mart';
import { EmojiModule } from '@ctrl/ngx-emoji-mart/ngx-emoji';

import {
  MatInputModule,
  MatButtonModule,
  MatButtonToggleModule,
  MatFormFieldModule,
  MatDialogModule,
  MatToolbarModule,
  MatIconModule,
  MatTableModule,
  MatRadioModule,
  MatCheckboxModule,
  MatSelectModule,
  MatAutocompleteModule,
  MatPaginatorModule,
  MatDividerModule,
  MatChipsModule,
  MatSidenavModule,
  MatTooltipModule,
  MatTabsModule,
  MatMenuModule,
  MatSliderModule,
  MatProgressBarModule,
  MatSlideToggleModule
} from "@angular/material";
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { ShareButtonsModule } from 'ngx-sharebuttons/buttons';
import { ShareIconsModule } from 'ngx-sharebuttons/icons';
import { NgxIntlTelInputModule } from 'ngx-intl-tel-input';
import { HeaderComponent } from '../pages/components/header/header.component';

export const CORE_PROVIDERS = [AppService,];

const maskOptions: Partial<any> = {

};

@NgModule({
  declarations: [
    HeaderComponent
  ],
  imports: [
    MatSlideToggleModule,
    CommonModule,
    DirectivesModule,
    FlexLayoutModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    MatButtonToggleModule,
    MatDialogModule,
    MatToolbarModule,
    FormsModule,
    ReactiveFormsModule,
    MatIconModule,
    MatTableModule,
    MatRadioModule,
    MatCheckboxModule,
    MatAutocompleteModule,
    MatMenuModule,
    MatPaginatorModule,
    MatSelectModule,
    MatDividerModule,
    MatChipsModule,
    MatExpansionModule,
    RouterModule,
    MatSidenavModule,
    MatProgressBarModule,
    MatTooltipModule,
    CarouselModule.forRoot(),
    MatTabsModule,
    // GooglePlaceModule,
    PickerModule,
    EmojiModule,
    MatSliderModule,
    ShareButtonsModule.withConfig({
      debug: true
    }),
    ShareIconsModule,
    NgxIntlTelInputModule
  ],
  exports: [
    MatSlideToggleModule,
    DirectivesModule,
    FlexLayoutModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    MatButtonToggleModule,
    MatDialogModule,
    MatToolbarModule,
    FormsModule,
    ReactiveFormsModule,
    MatIconModule,
    MatTableModule,
    MatMenuModule,
    MatRadioModule,
    MatCheckboxModule,
    MatAutocompleteModule,
    MatPaginatorModule,
    MatSelectModule,
    MatDividerModule,
    MatChipsModule,
    MatExpansionModule,
    RouterModule,
    MatSidenavModule,
    MatTooltipModule,
    MatTabsModule,
    MatProgressBarModule,
    // GooglePlaceModule,
    PickerModule,
    EmojiModule,
    MatSliderModule,
    // LiveEventsComponent,
    // QAndAComponent,
    // PollComponent,

    NgxIntlTelInputModule,
    HeaderComponent
  ],
  entryComponents: [],
  schemas: [CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA],
  providers: []

})
export class CoreModule {
  static forRoot(): ModuleWithProviders {
    return <ModuleWithProviders>{
      ngModule: CoreModule,
      providers: [...CORE_PROVIDERS],
    };
  }
}
