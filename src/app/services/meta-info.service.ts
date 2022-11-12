import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {BehaviorSubject} from "rxjs";
import {MetaInfo} from "../types/meta-info";

@Injectable({
  providedIn: 'root'
})
export class MetaInfoService {

  public readonly imageMetaInfo: BehaviorSubject<MetaInfo> = new BehaviorSubject<MetaInfo>(new MetaInfo());

  constructor(private http: HttpClient) {
  }

  public async init(): Promise<void> {
    this.http
      .get('./assets/paintings/images.json', {responseType: 'json'})
      // .subscribe(value => console.log(value))
      .subscribe(value => this.imageMetaInfo.next(value  as MetaInfo))
    ;

  }
}
