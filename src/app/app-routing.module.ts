import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LandingPageComponent } from './components/landing-page/landing-page.component';
import { LoginComponent } from './login/login.component';
import { SignUpComponent } from './sign-up/sign-up.component'
import { DashboardContainerComponent } from './components/dashboard/dashboard-container/dashboard-container.component';

const routes: Routes = [
  {path:'', component: LandingPageComponent},
  {path:'Dashboard', component: DashboardContainerComponent},
  {path:'LogIn', component: LoginComponent},
  {path:'SignUp', component: SignUpComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
