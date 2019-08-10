import { Component, OnInit, AfterViewInit, TemplateRef, ViewChild, ElementRef } from '@angular/core';
import { Router } from '@angular/router';
import { BsModalService, BsModalRef } from 'ngx-bootstrap/modal';
declare let $: any;

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit, AfterViewInit {

  @ViewChild('template') template: any;
  modalRef: BsModalRef;
  constructor(private router: Router, private modalService: BsModalService) { }

  ngOnInit() {
  }

  openModal(template: TemplateRef<any>) {
    this.modalRef = this.modalService.show(template);
  }

  closeModal() {
    if (!this.modalRef) {
      return;
    }
    this.modalRef.hide();
    this.modalRef = null;
  }

  ngAfterViewInit() {
    this.openModal(this.template);
    /*
    $('#popupenqForm').validate({
      errorElement: 'div',
      errorClass: 'validation-block',
      focusInvalid: false,
      rules: {
        popfname: { required: true },
        popemail: { required: true, email: true },
        popphone: { required: true, number: true, minlength: 10, maxlength: 10 },
        popmessage: {required: true},
        cityName: {required: true}
      },

      messages: {
        popfname: { required: 'Enter your full name' },
        popemail: { required: 'Enter your email id', email: 'Not a valid email' },
        popphone: { required: 'Enter your contact number',number:'Only digits are allowed',minlength:'Provide 10 digits number',maxlength:'Provide 10 digits number' },
        popmessage: { required: 'Enter your message' },
        cityName: { required: 'Enter your cityname' }
      },
      errorPlacement: function(error, element) {
        const name = $(element).attr('name');
        const $obj = $('#' + name + '_validate');
        if ($obj.length) {
          error.appendTo($obj);
        } else {
          error.insertAfter(element);
        }
      }
    });
    */
  }
}
