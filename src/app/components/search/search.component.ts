import {Component, EventEmitter, Input, Output} from '@angular/core';
import {States} from "../../app.component";

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.less']
})
export class SearchComponent {
  @Output() getLocation = new EventEmitter();
  @Output() getMeal = new EventEmitter();

  States = States;
}
