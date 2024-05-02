import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-change-password',
  templateUrl: './change-password.component.html',
  styleUrls: ['./change-password.component.scss']
})
export class ChangePasswordComponent {

  userPasswords: any = {
    password: '',
    confirmPassword: ''
  }
  isVisible: boolean = false

  pwdVisibility() {
    
  }

  submit(form: NgForm) {

  }
}
