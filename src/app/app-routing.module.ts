import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {ImageDetailComponent} from "./components/image-detail/image-detail.component";
import {ImageOverviewComponent} from "./components/image-overview/image-overview.component";

const routes: Routes = [
  {
    path: '',
    component: ImageOverviewComponent,
  },
  {
    path: 'detail',
    component: ImageDetailComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
