import Amplify from 'aws-amplify';
import { environment } from './environments/environment';

Amplify.configure({
    // Auth: {
    //     userPoolId: environment.AWS_Cognito.userPoolId,
    //     identityPoolId: environment.AWS_Cognito.identityPoolId,
    //     userPoolWebClientId: environment.AWS_Cognito.userPoolWebClientId,
    //     region: environment.AWS_Cognito.region
    // },
    API: {
        endpoints: [
            {
                name: environment.AWS_Cognito.apiName,
                endpoint: environment.AWS_Cognito.apiBase,
                region: environment.AWS_Cognito.region
            }
            // ,{
            //     name: environment.AWS_Cognito.apiName_cloudSearch,
            //     endpoint: environment.AWS_Cognito.apiBase_CloudSearch,
            //     region: environment.AWS_Cognito.region_cloudSearch
            // }
        ]
    },
    aws_appsync_graphqlEndpoint: environment.AWS_Cognito.aws_appsync_graphqlEndpoeint,
    aws_appsync_region: environment.AWS_Cognito.aws_appsync_region,
    aws_appsync_authenticationType: "API_KEY",
    aws_appsync_apiKey: environment.AWS_Cognito.aws_appsync_apiKey, 
});
