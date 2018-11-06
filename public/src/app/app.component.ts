import { Component } from '@angular/core';
import { HttpService } from './http.service';
import {Router} from '@angular/router';
// import {ViewEncapsulation} from '@angular/core';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  // encapsulation: ViewEncapsulation.None 
})
// 
export class AppComponent {
  constructor(private _httpService: HttpService,private _router:Router,){} 
  ngOnInit() {
  }

}

