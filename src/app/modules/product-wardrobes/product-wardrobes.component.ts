import { Component, OnInit, AfterViewInit } from '@angular/core';
declare let $: any;

@Component({
  selector: 'app-product-wardrobes',
  templateUrl: './product-wardrobes.component.html',
  styleUrls: ['./product-wardrobes.component.scss']
})
export class ProductWardrobesComponent implements OnInit, AfterViewInit {

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
