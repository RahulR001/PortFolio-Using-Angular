import { Component, OnInit } from '@angular/core';
import { cardin1, cardin2, slidein1, slideinright, viewin } from '../animations';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
    styleUrls: ['./about.component.css'],
    animations: [
        cardin1,
        cardin2,
        slidein1,
        slideinright,
        viewin
  ]
})
export class AboutComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
