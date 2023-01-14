import { Component, Input, OnInit } from '@angular/core';
import { Description } from 'src/app/jobs';

@Component({
  selector: 'app-job-description',
  templateUrl: './job-description.component.html',
  styleUrls: ['./job-description.component.css'],
})
export class JobDescriptionComponent implements OnInit {

  @Input() desc: Description[] = [];

  constructor() {}

  ngOnInit(): void {


   let mobileAppDev =
      new Description(
        'Mobile App Developer',
        'Bincom Dev Center, Lagos',
        false,
        [
          'Must be able to write clean and readable code using angularJS',
          'Must be able to create responsive beautiful user interfaces',
          'Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptate, beatae itaque. Dolor!',
        ],
        [
          'Produce fully functional mobile applications',
          'Research and suggest new mobile products, applications and protocols',
          'Liaise with the Product development team to plan new features',
        ]
      )
        
      this.desc.push(mobileAppDev)

  }


}
