import { Component, OnInit, AfterViewInit, ViewEncapsulation } from '@angular/core';
import { Router } from '@angular/router';

declare let $: any;
@Component({
  selector: 'app-home-service',
  templateUrl: './home-service.component.html',
  styleUrls: ['./home-service.component.scss'],
  encapsulation: ViewEncapsulation.None,
})
export class HomeServiceComponent implements OnInit, AfterViewInit {

  owlGallery: any;
  constructor(private router: Router) { }

  ngOnInit() {

  }

  ngAfterViewInit() {
    $(document).ready(function() {
      $('.owl-carousel').owlCarousel({
        loop: true,
                margin: 10,
                responsiveClass: true,
                responsive: {
                    0: {
                        items: 1,
                        nav: true
                    },
                    600: {
                        items: 1,
                        nav: false
                    },
                    900: {
                        items: 2,
                        nav: false
                    },
                    1000: {
                        items: 3,
                        nav: true,
                        loop: false,
                        margin: 0
                    }
                }
    });
    });
  }

}
