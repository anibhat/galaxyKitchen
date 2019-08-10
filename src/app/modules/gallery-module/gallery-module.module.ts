import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GalleryComponent } from './components/gallery/gallery.component';
import { GalleryService } from './service/gallery.service';

@NgModule({
  imports: [
    CommonModule,
  ],
  declarations: [
    GalleryComponent
  ],
  providers: [
    GalleryService
  ],
  exports: [
    GalleryComponent
  ]
})
export class GalleryModule { }
