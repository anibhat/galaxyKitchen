import { Component, OnInit, AfterViewInit } from '@angular/core';
declare let $: any;

@Component({
  selector: 'app-product-others',
  templateUrl: './product-others.component.html',
  styleUrls: ['./product-others.component.scss']
})

export class ProductOthersComponent implements OnInit, AfterViewInit {

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
