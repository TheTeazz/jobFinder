import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { SignUpComponent } from './sign-up/sign-up.component';
import { LandingPageComponent } from './components/landing-page/landing-page.component';
import { SideNavComponent } from './components/dashboard/side-nav/side-nav.component';
import { OverviewComponent } from './components/dashboard/overview/overview.component';
import { JobMatchesComponent } from './components/job-matches/job-matches.component';
import { UserInfoComponent } from './components/dashboard/user-info/user-info.component';
import { JobDescriptionComponent } from './components/job-description/job-description.component';
import { ApplicationComponent } from './components/dashboard/application/application.component';
import { ProfilePageComponent } from './components/profile-page/profile-page.component';
import { AutoApplyComponent } from './components/dashboard/auto-apply/auto-apply.component';
import { EmailComponent } from './password-reset/email/email.component';
import { NewPasswordComponent } from './password-reset/new-password/new-password.component';
import { FAQComponent } from './faq/faq.component';
import { NotificationsComponent } from './notifications/notifications.component';



@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    SignUpComponent,
    LandingPageComponent,
    SideNavComponent,
    OverviewComponent,
    JobMatchesComponent,
    UserInfoComponent,
    JobDescriptionComponent,
    ApplicationComponent,
    ProfilePageComponent,
    AutoApplyComponent,
    EmailComponent,
    NewPasswordComponent,
    FAQComponent,
    NotificationsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
