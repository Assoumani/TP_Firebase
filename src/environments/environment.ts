// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
  production: false,

  firebaseConfig: {
    apiKey: "AIzaSyCDxl1kS73a7e_Wm5DUSJPS_Z7GvgJNTnw",
    authDomain: "pwa-cours-a0c71.firebaseapp.com",
    projectId: "pwa-cours-a0c71",
    storageBucket: "pwa-cours-a0c71.appspot.com",
    messagingSenderId: "150941534283",
    appId: "1:150941534283:web:ed3f74bcbf8b6b348c25ce"
  },

  fireBaseMessage: {
    'auth/user-not-found': 'Utilisateur non trouvé',
    'auth/invalid-email': 'L\'email est mal formatté!',
    'auth/wrong-password': 'Email et ou mot de passe incorrect',
    'auth/argument-error': 'Veuillez saisir un email et un mot de passe correct',
    'auth/email-already-in-use': 'L\'email existe déjà!',
    'auth/weak-password': 'Le mot de passe doit contenir au moins 6 caractères!'
  }
};

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.
