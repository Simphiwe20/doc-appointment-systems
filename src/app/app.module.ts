import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { LoginComponent } from './components/forms/login/login.component';
import { SignUpComponent } from './components/forms/sign-up/sign-up.component';
import { ChangePasswordComponent } from './components/forms/change-password/change-password.component';
import { ProfileComponent } from './components/forms/profile/profile.component';
import { VerifyCodeComponent } from './components/forms/verify-code/verify-code.component';
import { MaterialModule } from './materials/material.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    LoginComponent,
    SignUpComponent,
    ChangePasswordComponent,
    ProfileComponent,
    VerifyCodeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MaterialModule,
    BrowserAnimationsModule,
    FormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
