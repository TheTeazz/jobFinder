import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

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
    JobDescriptionComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
