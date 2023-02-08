import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-auto-apply',
  templateUrl: './auto-apply.component.html',
  styleUrls: ['./auto-apply.component.css']
})
export class AutoApplyComponent implements OnInit {


  selected!:string
  autoApply!: boolean

  constructor() { }

  ngOnInit(): void {
    this.autoApply = false
    this.selected = 'no'
  }


  showDetails(){
    this.autoApply = true
  }
  hideDetails(){
    this.autoApply = false
  }
}
