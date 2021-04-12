import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './pages/login/login.component';
import { WelcomeComponent } from './pages/welcome/welcome.component';

import { AddMemberComponent } from './pages/add-member/add-member.component';

const routes: Routes = [
  { path: '', redirectTo:'login',pathMatch:'full'},
  { path: 'welcome', component: WelcomeComponent},
  { path: 'login', component: LoginComponent },
  { path: 'addmember', component: AddMemberComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
