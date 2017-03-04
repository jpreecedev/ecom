import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-reset-password',
  encapsulation: ViewEncapsulation.None,
  templateUrl: './reset-password.component.html',
  styleUrls: ['./reset-password.component.scss']
})
export class ResetPasswordComponent {

  constructor(titleService: Title) {
    titleService.setTitle('Reset Password');
  }
}
