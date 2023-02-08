import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-side-nav',
  templateUrl: './side-nav.component.html',
  styleUrls: ['./side-nav.component.css'],
})
export class SideNavComponent implements OnInit {

  isActive = false;
  smallScreenDisplay = 'none';
  showLogo = true

  constructor(private routes: Router) {}

  ngOnInit(): void {}
  navigateToHome() {
    this.routes.navigateByUrl('./LandingPage');
  }

  toggleOn() {
    this.isActive = true;
    this.smallScreenDisplay = 'block';
    this.showLogo = false
  }

  toggleOff() {
    this.isActive = false;
    this.smallScreenDisplay = 'none';
    this.showLogo = true
  }
}
