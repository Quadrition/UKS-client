// This file can be replaced during build by using the `fileReplacements` array.
// `ng build` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
  production: false,
  baseUrl: 'http://localhost:8080',
  login: 'auth/log-in',
  signUp: 'auth/sign-up',
  signOut: 'auth/sign-out',
  changePassword: 'auth/change-password',

  label: 'api/label',
  labelApplication: 'api/labelApplication',
  milestone: 'api/milestone',
  project: 'api/project',
  user: 'api/user',
  event: 'api/event',
  comment: 'api/comment',
  gitRepo: 'api/gitRepo',
  task: 'api/task',
  stateChange: 'api/stateChange',
  pullReq: 'api/pullReq',
  history: 'api/history'
};

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/plugins/zone-error';  // Included with Angular CLI.
