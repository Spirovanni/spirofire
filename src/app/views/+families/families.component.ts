import { Component, OnInit } from '@angular/core';
import {AngularFire, FirebaseListObservable } from 'angularfire2';
import 'rxjs/add/operator/map';
import { MdToolbar } from '@angular2-material/toolbar';
import { MdButton, MD_BUTTON_DIRECTIVES } from '@angular2-material/button';
import { MD_SIDENAV_DIRECTIVES } from '@angular2-material/sidenav';
import { MD_LIST_DIRECTIVES } from '@angular2-material/list';
import { MD_CARD_DIRECTIVES } from '@angular2-material/card';
import { MdInput } from '@angular2-material/input';
import { MdCheckbox } from '@angular2-material/checkbox';
import { MdRadioButton, MdRadioGroup, MdRadioDispatcher } from '@angular2-material/radio';
import { MdIcon, MdIconRegistry } from '@angular2-material/icon';

@Component({
  moduleId: module.id,
  selector: 'app-families',
  templateUrl: 'families.component.html',
  styleUrls: ['families.component.css'],
  directives: [
    MD_SIDENAV_DIRECTIVES,
    MD_LIST_DIRECTIVES,
    MD_BUTTON_DIRECTIVES,
    MD_CARD_DIRECTIVES,
    MdToolbar,
    MdButton,
    MdInput,
    MdCheckbox,
    MdRadioGroup,
    MdRadioButton,
    MdIcon
  ],
  providers: [MdIconRegistry, MdRadioDispatcher],
})
export class FamiliesComponent implements OnInit {
  families: FirebaseListObservable<any>;
  constructor(af:AngularFire) {
    this.families = af.database.list('/families');
  }
  add(newName: string) {
    this.families.push({ text: newName });
    this.families.push({ description: newName });
  }
  update(key: string, newSize: string) {
    this.families.update(key, { size: newSize });
  }
  deleteFamily(key: string) {
    this.families.remove(key);
  }
  deleteEverything() {
    this.families.remove();
  }

  ngOnInit() {
  }

}
