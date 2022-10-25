import { Component, OnInit } from '@angular/core';
import { slidein1, viewin } from '../animations';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
    styleUrls: ['./contact.component.css'],
    animations: [
        viewin,
        slidein1
  ]
})
export class ContactComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
