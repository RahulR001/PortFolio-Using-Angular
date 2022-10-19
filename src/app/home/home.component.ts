import { Component, OnInit } from '@angular/core';
import{profilein,slidein1,slidein2,slidein3} from '../animations'
@Component({
    selector: 'app-home',
    templateUrl: './home.component.html',
    styleUrls: ['./home.component.css'],
    animations: [
        profilein,
        slidein1,
        slidein2,
        slidein3
    ]

})
export class HomeComponent implements OnInit {

    constructor() { }

    ngOnInit(): void {
    }

}
