import { Component, ElementRef } from '@angular/core';

@Component({
  selector: 'app-verify-code',
  templateUrl: './verify-code.component.html',
  styleUrls: ['./verify-code.component.scss']
})
export class VerifyCodeComponent {

  code: any = {
    a: '',
    b: '',
    c: '',
    d: ''
  }

  focusOn(ele: any, el1: any) {
    console.log(el1)
    if(ele.value) {
      console.log(el1)
    }
  }

  submit() {
    
  }

}
