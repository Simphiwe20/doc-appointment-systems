import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {

  constructor(private router: Router) {}
  
  emailPattern: any = /^[^\s@]+@([^\s@.,]+\.)+[^\s@.,]{2,}$/
  isVisible: any = false
  isSubmitted: boolean = false

  icons: any[] = [
    {iconName: 'Apple', path: '../../../../assets/images/apple.png'},
    {iconName: 'Facebook', path: '../../../../assets/images/facebook.png'},
    {iconName: 'Instagram', path: '../../../../assets/images/instagram.png'}
  ]

  userCredentials: any = {email: '', password: ''}

  submit(form: NgForm): any {
    this.isSubmitted = true
    if(!form.valid) return

    console.log(form)

    // this.router.navigate(['/sign-up'])
  }

  pwdVisibility() {
    this.isVisible = !this.isVisible
  }

}
