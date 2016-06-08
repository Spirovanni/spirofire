import { Component, OnInit } from '@angular/core';
import {MD_SIDENAV_DIRECTIVES} from '@angular2-material/sidenav';
import {MD_LIST_DIRECTIVES} from '@angular2-material/list';
import {MdIcon, MdIconRegistry} from '@angular2-material/icon';


@Component({
  moduleId: module.id,
  selector: 'app-sidenav',
  templateUrl: 'sidenav.component.html',
  styleUrls: ['sidenav.component.css'],
  directives: [
    MD_SIDENAV_DIRECTIVES,
    MD_LIST_DIRECTIVES,
    MdIcon
  ],
  providers: [MdIconRegistry],
})
export class SidenavComponent implements OnInit {
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

  constructor() {}

  ngOnInit() {
  }

}
