import { CommanSubscribeService } from './core/services/comman-subscribe.service';
import { Router, NavigationEnd } from '@angular/router';
import { Component } from '@angular/core';
import { StorageService } from './core/services/storage.service';
import { environment } from 'src/environments/environment';
import * as FullStory from '@fullstory/browser';
import { Subscription } from 'rxjs';
import { Web3Service } from './core/services/web3.service';
import { AppService } from './core/services/app.service';
declare let window: any;
declare let device: any;
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'areveatv';

  signedIn: boolean;
  user: any;
  userInfo: any = {};
  otherDevice: boolean = true;
  userInfoSubscription: Subscription;
  iphone: boolean = false;
  deviceInfoSubscription: Subscription;
  deviceInfo: string = 'web';
  hideContent: boolean = false;
  content: string = 'live';
  accountNumber: any;

  constructor(public router: Router,
    private commanSubscribeService: CommanSubscribeService, private appService: AppService, private storageService: StorageService, private web3service: Web3Service) {
    this.router.events.subscribe((evt) => {
      if (!(evt instanceof NavigationEnd)) {
        return;
      }
      window.scrollTo(0, 0)
    });

    // this.amplifyService.authStateChange$
    //   .subscribe(authState => {
    //     this.signedIn = authState.state === 'signedIn';
    //     if (!authState.user) {
    //       this.user = null;
    //       this.userInfo = {};
    //     } else {
    //       this.user = authState.user; 
    //       if (this.signedIn && authState && authState.user && authState.user.attributes) {
    //         this.userInfo = authState.user.attributes;
    //         this.userInfo.signedIn = this.signedIn;
    //         // this.commanSubscribeService.sendUserInfo(this.userInfo);
    //       }
    //     }
    //   });

    // if (environment.production) {
    //   window['console']['log'] = function () { };
    // }
  }
  hidePrivateChat = false;
  ngOnInit() {
    this.web3service.connectedAccId.subscribe(walletId => this.accountNumber = walletId)
    console.log("ACcount Number: ", this.accountNumber)
    if (this.accountNumber === undefined || this.accountNumber == null || this.accountNumber == ""){
      localStorage.removeItem('AccountAddress save');
      return
    }else{
      console.log("Account Connected: ", this.accountNumber)
      this.appService.address = this.accountNumber;    
    }
    if (this.router.url.includes("/album/audio/") || this.router.url.includes("/album/channel/audio/")) {
      this.hidePrivateChat = true;
    }
    let mediaPlayerDataSubscription = this.commanSubscribeService.getMediaPlayerData().subscribe(response => {
      if ((response.key == "musicList" && response.value.length > 0) || (response.key == "is_show_musicPlayer" && response.value)) {
        // let isAudioPlaying = response.value.filter(a=>a.isAudioPlaying);
        // if(isAudioPlaying.length > 0){
        this.hidePrivateChat = true;
        // }
      } else {
        if (this.router.url.includes("/album/audio/") || this.router.url.includes("/album/channel/audio/")) {
          this.hidePrivateChat = true;
        } else {
          this.hidePrivateChat = false;
        }
      }
    });
    if (window.location.href.includes('token')) {
      let val = window.location.href.split('token=');
      let token = val[1].split('&type=');
      let typeVal = token[1] ? token[1].split('&') : '';
      let access_token = { 'access_token': token[0] }
      this.storageService.setItem("user_Info", access_token);
      this.storageService.setItem("app_type", typeVal[0]);
    }
    // else {
    //   this.storageService.deleteItem("app_type");
    // }
    let portalChange = this.storageService.getItem('portalChange');
    if (!localStorage.userInfo && portalChange && portalChange.requestFrom == "login") {
      this.storageService.deleteItem("portalChange");
    }
    if (window.location.pathname.includes('watch/'))
      this.content = 'video';
    else
      this.content = 'live';

    // if (!window.location.pathname.includes('stream') || !window.location.pathname.includes('watch'))
    if (window.location.pathname.includes('stream/') || window.location.pathname.includes('watch/')) {

      this.hideContent = true;
    } else {
      this.hideContent = false;
    }
    if (this.commanSubscribeService.checkExpire_Token()) {
      this.commanSubscribeService.getAuthToken();
    }
    this.userInfo = this.commanSubscribeService.userInfo;
    // this.initFullStory();
    this.userInfoSubscription = this.commanSubscribeService.getUserInfo().subscribe(response => {
      this.userInfo = response;
      // this.initFullStory();
    });

    // getMobileOperatingSystem() {
    //   var userAgent = navigator.userAgent || navigator.vendor || window['opera'];
    //   if (/windows phone/i.test(userAgent)) {
    //     return false;
    //   }
    //   if (/android/i.test(userAgent)) {
    //     return 'android';
    //   }
    //   if (/iPhone|iPod/.test(userAgent) && !window['MSStream']) {
    //     this.iphone = true;
    //     this.getcheck();
    //     return false;
    //   }
    //   return true;
    // }




    // initFullStory() {
    //     if (Object.keys(this.userInfo).length != 0) {
    //       FullStory.init({
    //         orgId: environment.FullStory_OrgID,
    //         devMode: environment.environment == "prod" || environment.environment == "preprod" ? false : true
    //       });
    //       FullStory.identify(this.userInfo.id, {
    //         displayName: this.userInfo.user_first_name + " " + this.userInfo.user_last_name
    //         // email: this.userInfo.email
    //        });
    //       //  FullStory.setUserVars({
    //       //   eventFrom : "Fan"
    //       //  })
    //     }
    //   }

    // initFullStory() {

    //   FullStory.init({
    //     orgId: environment.FullStory_OrgID,
    //     devMode: environment.environment == "prod" || environment.environment == "preprod" ? false : true
    //   });
    //   if (Object.keys(this.userInfo).length != 0) {
    //     FullStory.identify(this.userInfo.id, {
    //       displayName: this.userInfo.user_first_name + " " + this.userInfo.user_last_name
    //       // email: this.userInfo.email
    //     });
    //     //  FullStory.setUserVars({
    //     //   eventFrom : "Fan"
    //     //  })
    //   }
    // }
  }

  ngOnDestroy() {
    this.storageService.deleteItem("app_type");
    if (this.userInfoSubscription)
      this.userInfoSubscription.unsubscribe();
    if (this.deviceInfoSubscription)
      this.deviceInfoSubscription.unsubscribe();
  }

}
