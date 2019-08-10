import { Component, OnInit, AfterViewInit } from '@angular/core';
// import * as Swiper from 'swiper';
// declare var Swiper: any;

@Component({
  selector: 'app-gallery',
  templateUrl: './gallery.component.html',
  styleUrls: ['./gallery.component.scss']
})
export class GalleryComponent implements OnInit, AfterViewInit {

  swiperGallery: any;
  constructor() { }

  ngOnInit() {
  }

  ngAfterViewInit() {
    setTimeout(() => {
      this.swiperCall();
    }, 1000);
  }

  swiperCall() {
    const that = this;
    that.swiperGallery = new Swiper('#home-main-gallery', {
      navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
      },
      spaceBetween: 0,
      zoom        : false,
      speed       : 300,
      onInit      : function () {
          // console.log('Swipper oninit call');
      }
    });
  }

}
