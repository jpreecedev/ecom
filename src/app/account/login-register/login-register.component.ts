import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-login-register',
  encapsulation: ViewEncapsulation.None,
  templateUrl: './login-register.component.html',
  styleUrls: ['./login-register.component.scss']
})
export class LoginRegisterComponent {

  constructor(titleService: Title) {
    titleService.setTitle('Login / Register');
  }

}
