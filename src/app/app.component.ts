import { Component } from '@angular/core';
import {MetaInfoService} from "./services/meta-info.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Phelorenas Zeichenkammer';

  constructor(private metaInfoService:MetaInfoService) {
    this.metaInfoService.init();
  }
}
