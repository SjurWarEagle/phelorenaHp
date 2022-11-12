import {Component, Input, OnInit} from '@angular/core';
import {ImageInfo} from "../../types/image-info";

@Component({
  selector: 'app-image-preview',
  templateUrl: './image-preview.component.html',
  styleUrls: ['./image-preview.component.css']
})
export class ImagePreviewComponent implements OnInit {
  @Input()
  public imageInfo?: ImageInfo;
  public filler: string = '';

  constructor() {
    for (let i = 0; i < 1_000; i++) {
      this.filler += " ";
    }
  }

  ngOnInit(): void {
  }

}
