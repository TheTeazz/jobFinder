import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-profile-page',
  templateUrl: './profile-page.component.html',
  styleUrls: ['./profile-page.component.css']
})
export class ProfilePageComponent implements OnInit {

  isEdit!: boolean
  isCancel!: boolean 
  constructor() { }

  ngOnInit(): void {
    
  this.isEdit = false
  this.isCancel = true
  }

  cancel(){
    this.isEdit = false
    this.isCancel = true
  }

  editJobs(){
    this.isEdit = true
    this.isCancel = false
  }
}
