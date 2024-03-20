import { Injectable } from '@angular/core';
import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from '@angular/common/http';
import { Observable } from 'rxjs';
import { API, CONST_ONE_API, US_ORIGIN } from '../constants';
import { environment } from 'src/environments/environment';
import { CommanSubscribeService } from '../services/comman-subscribe.service';
import { StorageService } from '../services/storage.service';

@Injectable()
export class AreveaTVInterceptor implements HttpInterceptor {

    SKIP_URLS: string[];
    CONCAT_URL: string[];
    OL_tokenURL: any = "";
    OL_AuthURLs: any = [];
    constructor(private commanSubscribeService: CommanSubscribeService,
        private storageService: StorageService) {
        this.SKIP_URLS = [CONST_ONE_API.API_SESSION_TOKEN];
        this.CONCAT_URL = [];
        this.SKIP_URLS.forEach(e => {
            // if (e == CONST_ONE_API.API_SESSION_TOKEN) {
            //     this.CONCAT_URL.push(environment.oneLogin.subDomainURL + e);
            // } else {
            //     this.CONCAT_URL.push(environment.API_URL_TV + e);
            // }
        });

        this.OL_AuthURLs.push(CONST_ONE_API.SEND_VERIFY_OTP);
        this.OL_AuthURLs.push(CONST_ONE_API.LOGOUT);
        US_ORIGIN.forEach(e => {
            if (e != CONST_ONE_API.GET_TOKEN) {
                // this.OL_AuthURLs.push(environment.oneLogin.baseURL + e);
            }
        });
    }

    intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        let userInfo = this.commanSubscribeService.userInfo;
        let ol_authInfo = this.storageService.getItem("ol_authInfo");

        //if(req.url.indexOf("onelogin") != -1 && req.url.indexOf("auth/oauth2/token")) {
        if (req.url == this.OL_tokenURL) {
            let Request: HttpRequest<any> = req.clone({
                setHeaders: {
                    // "Authorization": `client_id:${environment.oneLogin.client_id},client_secret: ${environment.oneLogin.client_secret}`,
                    // "Authorization" :  new Buffer(`${environment.oneLogin.client_id}:${environment.oneLogin.client_id}`).toString('base64'),
                    "Content-Type": "application/json"
                }
            });
            return next.handle(Request);
        } else if (this.checkURLs(req.url) && ol_authInfo && ol_authInfo.access_token) {
            let Request: HttpRequest<any> = req.clone({
                setHeaders: {
                    "Authorization": `Bearer ${ol_authInfo.access_token}`,
                    "Content-Type": "application/json",
                }
            });
            return next.handle(Request);
        } else if (!this.isURLSkippable(req.url) && userInfo && userInfo.access_token) {
            let Request: HttpRequest<any> = req.clone({
                setHeaders: {
                    "Authorization": `Bearer ${userInfo.access_token}`,
                    "access_token": userInfo.access_token,
                    "x-api-key": environment.AWS_Cognito.X_Api_Key
                }
            });
            return next.handle(Request);
        }
        return next.handle(req);

    }

    checkURLs(url) {
        let returnValue = false;
        this.OL_AuthURLs.forEach(e => {
            if (url.indexOf(e) != -1)
                returnValue = true;
        });
        return returnValue;
    }

    //here checking is api auth token required or not
    private isURLSkippable(requestURL: string): boolean {
        requestURL = requestURL || "";
        return this.CONCAT_URL.some(e => requestURL.indexOf(e) > -1);
    }
}
