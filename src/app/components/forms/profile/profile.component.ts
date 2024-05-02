import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent {

  userDetails: any = {
    name: '',
    cellNumber: '',
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
