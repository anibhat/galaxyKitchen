import { Component, OnInit, AfterViewInit } from '@angular/core';
declare let $: any;

@Component({
  selector: 'app-product-tvunits',
  templateUrl: './product-tvunits.component.html',
  styleUrls: ['./product-tvunits.component.scss']
})
export class ProductTvunitsComponent implements OnInit, AfterViewInit {

  constructor() { }

  ngOnInit() {
  }

  ngAfterViewInit() {
    $(document).ready(function() {
      if ($('.filter-list').length) {
        $('.filter-list').mixItUp({});
      }
      // if ($('.lightbox-image').length) {
      //   $('.lightbox-image').fancybox({
      //     openEffect  : 'fade',
      //     closeEffect : 'fade',
      //     helpers : {
      //       media : {}
      //     }
      //   });
      // }
    });
  }

}
