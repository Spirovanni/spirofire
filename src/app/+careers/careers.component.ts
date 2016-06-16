import { Component, OnInit } from '@angular/core';
import { AngularFire } from 'angularfire2';
import {Observable} from 'rxjs';
import 'rxjs/add/operator/map';

@Component({
  moduleId: module.id,
  selector: 'app-careers',
  templateUrl: 'careers.component.html',
  styleUrls: ['careers.component.sass']
})
export class CareersComponent implements OnInit {
  careers:Observable<any[]>;
  constructor(af:AngularFire) {
    this.careers = af.list('/careers');
  }

  views: Object[] = [
    {
      name: "My Account",
      description: "Edit my account information",
      code: "100034",
      icon: "assignment ind"
    },
    {
      name: "Player Types",
      description: "Find your Player Type!",
      code: "100038",
      icon: "work"
    }
  ];

  ngOnInit() {
  }

}
