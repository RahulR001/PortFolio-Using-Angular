import { animate } from '@angular/animations';
import { Component, OnInit } from '@angular/core';
import { slidein2, slideinright,  viewin } from '../animations';

@Component({
  selector: 'app-project',
  templateUrl: './project.component.html',
    styleUrls: ['./project.component.css'],
    animations: [
        viewin,
        slideinright,
        slidein2,  
  ]
})
export class ProjectComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
}
