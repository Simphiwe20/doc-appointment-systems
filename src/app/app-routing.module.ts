import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './components/forms/login/login.component';

const routes: Routes = [
  {path: '', redirectTo: '/sign-in', pathMatch: 'full'},
  {path: 'sign-in', component: LoginComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
