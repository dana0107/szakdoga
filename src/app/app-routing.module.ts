import { WelcomeComponent } from './pages/welcome/welcome.component';

import { AddMemberComponent } from './pages/add-member/add-member.component';
import { RegistrationComponent } from './pages/registration/registration.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './pages/login/login.component';

const routes: Routes = [
  { path: '', component: LoginComponent},
  { path: 'welcome', component: WelcomeComponent},
  { path: 'registration', component: RegistrationComponent },
  { path: 'login', component: LoginComponent },
  { path: 'addmember', component: AddMemberComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
