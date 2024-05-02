import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.scss']
})
export class SignUpComponent {


  emailPattern: any = /^[^\s@]+@([^\s@.,]+\.)+[^\s@.,]{2,}$/
  userDetails: any = {
    name: '',
    email: '',
    password: '',
    confirmPassword: '',
    agreedToTerms: false
  }
  isVisible: boolean = false

  pwdVisibility() {
    this.isVisible = !this.isVisible
  }

  submit(form: NgForm) {
    if(!form.valid) return

    console.log(form)
  }
}
