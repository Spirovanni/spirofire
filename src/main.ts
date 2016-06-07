import { bootstrap } from '@angular/platform-browser-dynamic';
import { enableProdMode } from '@angular/core';
import { SpirofireAppComponent, environment } from './app/';
import {FIREBASE_PROVIDERS,
    defaultFirebase,
    AngularFire,
    AuthMethods,
    AuthProviders,
    firebaseAuthConfig} from 'angularfire2';

if (environment.production) {
  enableProdMode();
}

bootstrap(SpirofireAppComponent, [
    FIREBASE_PROVIDERS,
    defaultFirebase('https://spirofire.firebaseio.com'),
    firebaseAuthConfig({
        provider: AuthProviders.Twitter,
        method: AuthMethods.Redirect
    })
]);
