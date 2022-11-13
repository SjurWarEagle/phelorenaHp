import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from "@angular/router";

@Component({
  selector: 'app-image-detail',
  templateUrl: './image-detail.component.html',
  styleUrls: ['./image-detail.component.css']
})
export class ImageDetailComponent implements OnInit {
  public mediaId?: string | null;

  constructor(private route: ActivatedRoute) {
  }

  ngOnInit(): void {
    this.mediaId = this.route.snapshot.paramMap.get('mediaId');
  }

}
