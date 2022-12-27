import { Component, Input, OnInit } from '@angular/core';
import { Jobs } from 'src/app/jobs';

@Component({
  selector: 'app-job-matches',
  templateUrl: './job-matches.component.html',
  styleUrls: ['./job-matches.component.css']
})
export class JobMatchesComponent implements OnInit {

 @Input() jobs: Jobs[] = []
  constructor() { }

  ngOnInit(): void {
    this.jobs.push(new Jobs('Mobile App Developer', 'Bincom Dev Center, Lagos', true, ['Must be able to write clean and readable code using angularJS', 'Must be able to create responsive beautiful user interfaces....', 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptate, beatae itaque. Dolor!' ]))
    this.jobs.push(new Jobs('Frontend Developer', 'Apple inc.', false, ['Must be able to write clean and readable code using angularJS', 'Must be able to create responsive beautiful user interfaces....', 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptate, beatae itaque. Dolor!' ]))
    this.jobs.push(new Jobs('Full Stack Developer', 'Microsoft', false, ['Must be able to write clean and readable code using angularJS', 'Must be able to create responsive beautiful user interfaces....', 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptate, beatae itaque. Dolor!' ]))
    this.jobs.push(new Jobs('Angular Developer', 'Google inc.', true, ['Must be able to write clean and readable code using angularJS', 'Must be able to create responsive beautiful user interfaces....', 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptate, beatae itaque. Dolor!' ]))
  }

}
