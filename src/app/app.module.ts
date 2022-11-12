import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {AppComponent} from './app.component';
import {HttpClientModule} from "@angular/common/http";
import {ImageOverviewComponent} from './components/image-overview/image-overview.component';
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";
import { ImagePreviewComponent } from './components/image-preview/image-preview.component';
import {MatCardModule} from "@angular/material/card";
import {MatToolbarModule} from "@angular/material/toolbar";
import {MatIconModule} from "@angular/material/icon";
import {MatInputModule} from "@angular/material/input";
import {FormsModule} from "@angular/forms";

@NgModule({
  declarations: [
    AppComponent,
    ImageOverviewComponent,
    ImagePreviewComponent
  ],
  imports: [
    MatCardModule,
    MatToolbarModule,
    MatInputModule,
    MatIconModule,
    BrowserModule,
    BrowserAnimationsModule,
    HttpClientModule,
    FormsModule,
  ],
  providers: [],
  bootstrap: [
    AppComponent
  ]
})
export class AppModule {
}
