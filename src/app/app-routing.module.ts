import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LandingPageComponent } from './components/landing-page/landing-page.component';
import { LoginComponent } from './login/login.component';
import { SignUpComponent } from './sign-up/sign-up.component'
import { JobMatchesComponent } from './components/job-matches/job-matches.component';
import { OverviewComponent } from './components/dashboard/overview/overview.component';
import { JobDescriptionComponent } from './components/job-description/job-description.component';

const routes: Routes = [
  {path:'', component: LandingPageComponent},
  {path:'Overview', component: OverviewComponent},
  {path:'Job-matches', component: JobMatchesComponent},
  {path:'Job-description', component: JobDescriptionComponent},
  {path:'LogIn', component: LoginComponent},
  {path:'SignUp', component: SignUpComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
