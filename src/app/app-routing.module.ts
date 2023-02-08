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
import { NewPasswordComponent } from './password-reset/new-password/new-password.component';
import { EmailComponent } from './password-reset/email/email.component';
import { FAQComponent } from './faq/faq.component';
import { NotificationsComponent } from './notifications/notifications.component';

const routes: Routes = [
  {path:'', component: LandingPageComponent},
  {path:'overview', component: OverviewComponent},
  {path:'job-matches', component: JobMatchesComponent},
  {path:'job-description', component: JobDescriptionComponent},
  {path:'logIn', component: LoginComponent},
  {path:'signUp', component: SignUpComponent},
  {path:'applications', component: ApplicationComponent},
  {path:'profile', component: ProfilePageComponent},
  {path:'auto-apply', component: AutoApplyComponent},
  {path:'email', component: EmailComponent},
  {path:'new-password', component: NewPasswordComponent},
  {path:'faq', component: FAQComponent},
  {path:'notifications', component: NotificationsComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
