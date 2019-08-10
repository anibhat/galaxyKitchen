import { Component, OnInit, AfterViewInit } from '@angular/core';
declare let $: any;

@Component({
  selector: 'app-product-kitchens',
  templateUrl: './product-kitchens.component.html',
  styleUrls: ['./product-kitchens.component.scss']
})
export class ProductKitchensComponent implements OnInit, AfterViewInit {

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
