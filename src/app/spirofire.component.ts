import { Component } from '@angular/core';
import { AngularFire, AuthProviders, AuthMethods } from 'angularfire2';

@Component({
  moduleId: module.id,
  selector: 'spirofire-app',
  templateUrl: 'spirofire.component.html',
  styleUrls: ['spirofire.component.css']
})
export class SpirofireAppComponent {
  title = 'Spirofire is Live!';
  constructor(public af: AngularFire) {
    this.af.auth.subscribe(auth => console.log(auth));
  }
  login() {
    this.af.auth.login({
      provider: AuthProviders.Twitter,
      method: AuthMethods.Popup,
    });
  }
  overrideLogin() {
    this.af.auth.login({
      provider: AuthProviders.Anonymous,
      method: AuthMethods.Anonymous,
    });
  }
}
