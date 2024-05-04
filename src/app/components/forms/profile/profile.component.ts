import { Component } from '@angular/core';
import { FormControl, FormGroup, NgForm, Validators } from '@angular/forms';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent {

  userDetails: FormGroup
  idPattern: any = /^(((\d{2}((0[13578]|1[02])(0[1-9]|[12]\d|3[01])|(0[13456789]|1[012])(0[1-9]|[12]\d|30)|02(0[1-9]|1\d|2[0-8])))|([02468][048]|[13579][26])0229))(( |-)(\d{4})( |-)(\d{3})|(\d{7}))/;

  constructor() {
    this.userDetails = new FormGroup({
      fullName: new FormControl('', [Validators.required]),
      cellNumber: new FormControl('', [Validators.required, Validators.maxLength(10)]),
      dateOfBirth: new FormControl('', [Validators.required]),
      idNumber: new FormControl('', [Validators.required, Validators.pattern(this.idPattern)])
    })

  }

  submit() {
    if (!this.userDetails.valid) return

    console.log(this.userDetails.value)
  }
}
