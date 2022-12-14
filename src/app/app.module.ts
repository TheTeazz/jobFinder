import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { SignUpComponent } from './sign-up/sign-up.component';
import { LandingPageComponent } from './components/landing-page/landing-page.component';
import { HeaderComponent } from './components/dashboard/header/header.component';
import { SideNavComponent } from './components/dashboard/side-nav/side-nav.component';
import { MainComponent } from './components/dashboard/main/main.component';
import { DashboardContainerComponent } from './components/dashboard/dashboard-container/dashboard-container.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    SignUpComponent,
    LandingPageComponent,
    HeaderComponent,
    SideNavComponent,
    MainComponent,
    DashboardContainerComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
