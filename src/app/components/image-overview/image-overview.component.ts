import {Component, OnDestroy, OnInit} from '@angular/core';
import {MetaInfoService} from "../../services/meta-info.service";
import {MetaInfo} from "../../types/meta-info";
import {Subscription} from "rxjs";
import {ImageInfo} from "../../types/image-info";

@Component({
  selector: 'app-image-overview',
  templateUrl: './image-overview.component.html',
  styleUrls: ['./image-overview.component.css']
})
export class ImageOverviewComponent implements OnInit, OnDestroy {
  set searchString(value: string) {
    this._searchString = value;
    this.filterImages();
  }

  private _searchString?: string;
  public filteredImageInfo?: ImageInfo[];
  public allMetaInfo?: MetaInfo;
  private subscription?: Subscription;

  constructor(private metaInfoService: MetaInfoService) {
  }

  public filterImages(): void {
    if (!this._searchString) {
      this.filteredImageInfo = this.allMetaInfo?.info;
    } else {
      this.filteredImageInfo = this.allMetaInfo?.info.filter(image => image.twitterPost.toLowerCase().indexOf(this._searchString?.toLowerCase()!) !== -1)
    }
  }

  ngOnInit(): void {
    this.subscription = this.metaInfoService.imageMetaInfo.subscribe(value => {
      this.allMetaInfo = value;
      this.filterImages();
    });
  }

  ngOnDestroy(): void {
    if (this.subscription) {
      this.subscription.unsubscribe();
    }
  }

}
