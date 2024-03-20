// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
  production: false,
  environment: "dev1",
  ipfs: 'http://54.244.104.76',
  captchaKey: '6Le_aVgUAAAAAJ3p_Uwt4H6MlHSkhZL1t4J_zOH4',
  CONSUMER_PORTAL: "https://dev1.arevea.com/",
  API_URL_TV: 'https://dev1.arevea.com/api/user/v1/',
  // API_URL_TV: 'http://localhost:8080/v1/',
  VENDOR_PORTAL: "https://dev1.arevea.com/creator/",
  AWS_FILE_BUCKET_PATH: 'https://dev-uploads.arevea.com/dev/',
  UPLOAD_URL_EXTENSION: '.com/',
  AWS_Cognito: {
    
  },
  AWS: {
  
  },
};

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.
