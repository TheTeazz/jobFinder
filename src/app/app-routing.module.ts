import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LandingPageComponent } from './components/landing-page/landing-page.component';
import { LoginComponent } from './login/login.component';
import { SignUpComponent } from './sign-up/sign-up.component'
import { JobMatchesComponent } from './components/job-matches/job-matches.component';
import { OverviewComponent } from './components/dashboard/overview/overview.component';
import { JobDescriptionComponent } from './components/job-description/job-description.component';
import { ApplicationComponent } from './components/dashboard/application/application.component';
import { ProfilePageComponent } from './components/profile-page/profile-page.component';
import { AutoApplyComponent } from './components/dashboard/auto-apply/auto-apply.component';

const routes: Routes = [
  {path:'', component: LandingPageComponent},
  {path:'Overview', component: OverviewComponent},
  {path:'Job-matches', component: JobMatchesComponent},
  {path:'Job-description', component: JobDescriptionComponent},
  {path:'LogIn', component: LoginComponent},
  {path:'SignUp', component: SignUpComponent},
  {path:'Applications', component: ApplicationComponent},
  {path:'Profile', component: ProfilePageComponent},
  {path:'Auto-apply', component: AutoApplyComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
