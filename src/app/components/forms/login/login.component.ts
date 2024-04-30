import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {

  icons: any[] = [
    {iconName: 'Apple', path: '../../../../assets/images/apple.png'},
    {iconName: 'Facebook', path: '../../../../assets/images/facebook.png'},
    {iconName: 'Instagram', path: '../../../../assets/images/instagram.png'}
  ]

  userCredentials: any = {email: '', password: ''}

  submit(form: NgForm): any {

  }

}
