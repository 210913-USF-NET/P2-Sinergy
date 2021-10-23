
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
  production: false,
    authDomain: "dev-u95zl0ql.us.auth0.com",
    authClientId: "YDHUZA0pQLaH5xYdA5JxwLvjEL8AtMMO",
    redirectUri: 'localhost:4200',
    APIUrl: 'https://cacophony.azurewebsites.net/',
    //add Url once we get it from azure
    //spotify token identifiers
    SpotifyClientId: '84b1d35168da48b695dee126e8e1e77e',
    SpotifyClientSecret: '86b51ae776d2420885f2c5ba9ea63b07'
};

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/plugins/zone-error';  // Included with Angular CLI.
