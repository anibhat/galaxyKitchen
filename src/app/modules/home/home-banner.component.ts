import { Component, OnInit, AfterViewInit } from '@angular/core';
import { Router } from '@angular/router';
declare let $: any;

@Component({
  selector: 'app-home-banner',
  templateUrl: './home-banner.component.html',
  styleUrls: ['./home-banner.component.scss']
})
export class HomeBannerComponent implements OnInit, AfterViewInit {

  constructor(private router: Router) { }

  ngOnInit() {
  }

  ngAfterViewInit() {
    $(document).ready(function() {
      if ($('.banner-carousel').length) {
        $('.banner-carousel').owlCarousel({
          animateOut: 'fadeOut',
          animateIn: 'fadeIn',
          loop: true,
          margin: 0,
          nav: true,
          smartSpeed: 700,
          autoHeight: true,
          autoplay: true,
          autoplayTimeout: 10000,
          pagination: false,
          navText: [ '<span class="fa fa-long-arrow-left"></span> prev', 'next<span class="fa fa-long-arrow-right"></span>' ],
          responsive: {
            0: {
              items: 1
            },
            600: {
              items: 1
            },
            1024: {
              items: 1
            },
          }
        });
      }
    });
  }
}
