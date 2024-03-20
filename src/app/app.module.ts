import { BrowserModule } from '@angular/platform-browser';
import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CoreModule } from './core/core.module';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { AreveaTVInterceptor } from './core/interceptors/app.interceptor';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RecaptchaModule } from "ng-recaptcha";
import { ToastrModule, ToastrService } from "ngx-toastr";
// import { AmplifyAngularModule, AmplifyService, AmplifyModules } from 'aws-amplify-angular';
import { AmplifyAngularModule } from 'aws-amplify-angular';
import { DatePipe } from '@angular/common';

// import Auth from '@aws-amplify/auth';
// import Interactions from '@aws-amplify/interactions';
// import Storage from '@aws-amplify/storage';
import {
  NgxUiLoaderModule,
  NgxUiLoaderHttpModule,
  NgxUiLoaderConfig,
  SPINNER,
  POSITION,
  PB_DIRECTION
} from "ngx-ui-loader";
import { CookieService } from 'ngx-cookie-service';
import { MatSliderModule, MatProgressBarModule } from "@angular/material";
import { ConnectionService } from 'ng-connection-service';
import { CarouselModule } from 'ngx-bootstrap/carousel';
// import { UpcomingEventsComponent } from './pages/components/website/pages/upcoming-events/upcoming-events.component';
// import { HomeUpdatesComponent } from './pages/components/website/pages/home-updates/home-updates.component';
// import { LiveEventsComponent } from './pages/layout/live-events/live-events.component';

const ngxUiLoaderConfig: NgxUiLoaderConfig = {
  bgsColor: "#8ce6d6",
  bgsOpacity: 0.5,
  bgsPosition: POSITION.bottomRight,
  bgsSize: 90,
  bgsType: SPINNER.threeStrings,
  blur: 6,
  delay: 0,
  fgsColor: "#8ce6d6",
  fgsPosition: "center-center",
  fgsSize: 110,
  fgsType: SPINNER.threeStrings,
  gap: 24,
  logoPosition: "center-center",
  logoSize: 120,
  logoUrl: "",
  masterLoaderId: "master",
  overlayBorderRadius: "0",
  overlayColor: "rgba(66,64,64,0.8)",
  pbColor: "#8ce6d6",
  pbDirection: PB_DIRECTION.leftToRight,
  pbThickness: 3,
  hasProgressBar: true,
  text: "Loading...",
  textColor: "#FFFFFF"
};


@NgModule({
  declarations: [
    AppComponent,
    AppRoutingModule.COMPONENTS,
    // UpcomingEventsComponent,
    // HomeUpdatesComponent
    // PollComponent,
    // LiveEventsComponent,
    // NewLayoutComponent,
    // RequestDemoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CoreModule.forRoot(),
    BrowserAnimationsModule,
    MatSliderModule,
    MatProgressBarModule,
    RecaptchaModule.forRoot(),
    ToastrModule.forRoot({
      maxOpened: 1,
      autoDismiss: true,
      enableHtml: true,
      positionClass: 'toast-center-center',
    }),
    HttpClientModule,
    AmplifyAngularModule,
    NgxUiLoaderModule.forRoot(ngxUiLoaderConfig),
    NgxUiLoaderHttpModule.forRoot({ showForeground: true, excludeRegexp: ['NOLOADER'] }),
    CarouselModule.forRoot()
  ],
  exports: [
    NgxUiLoaderModule,
    NgxUiLoaderHttpModule
  ],
  entryComponents: [
  ],
  providers: [
    CookieService,
    DatePipe,
    { provide: HTTP_INTERCEPTORS, useClass: AreveaTVInterceptor, multi: true },
    // {
    //   provide: AmplifyService,
    //   useFactory: () => {
    //     return AmplifyModules({
    //       Auth,
    //       Storage,
    //       Interactions
    //     });
    //   }
    // }
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  bootstrap: [AppComponent],
})
export class AppModule {

  isConnected = true;
  connectionStatus = "ONLINE";
  constructor(private connectionService: ConnectionService,
    public toastr: ToastrService) {
    this.connectionService.monitor().subscribe(isConnected => {
      this.isConnected = isConnected;
      let beforeChangeStatus = this.connectionStatus;
      this.connectionStatus = this.isConnected ? "ONLINE" : "OFFLINE";
      if (this.connectionStatus == "OFFLINE") {
        this.toastr.error("No network connection");
      } else if (beforeChangeStatus == "OFFLINE" && this.connectionStatus) {
        this.toastr.success("Back online");
        setTimeout(() => {
          window.location.reload();
        }, 100);
      }
    });
  }

}
