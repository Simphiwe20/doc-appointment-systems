import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './components/forms/login/login.component';
import { SignUpComponent } from './components/forms/sign-up/sign-up.component';
import { VerifyCodeComponent } from './components/forms/verify-code/verify-code.component';
import { ChangePasswordComponent } from './components/forms/change-password/change-password.component';
import { ProfileComponent } from './components/forms/profile/profile.component';

const routes: Routes = [
  {path: '', redirectTo: '/sign-in', pathMatch: 'full'},
  {path: 'sign-in', component: LoginComponent},
  {path: 'sign-up', component: SignUpComponent},
  {path: 'verify-code', component: VerifyCodeComponent},
  {path: 'change-pwd', component: ChangePasswordComponent},
  {path: 'profile', component: ProfileComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
