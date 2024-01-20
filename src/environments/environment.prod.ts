// This file can be replaced during build by using the `fileReplacements` array.
// `ng build` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

import { Environment } from '../app/utils/interfaces/environment.interfaces';
import { Urls } from '../app/utils/enums/urls.enum';

export const environment: Environment = {
  baseUrl: 'http://localhost:4200',
  production: true,
  clientId: '519h5egol822kv8h9evtpbh051',
  urlsEnum: Urls,
};

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/plugins/zone-error';  // Included with Angular CLI.
