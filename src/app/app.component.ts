import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from "@angular/router";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  url: boolean = false;
  constructor(private route: ActivatedRoute) {}

  getUrl(): boolean {
    if (localStorage.getItem('contact')) {
      this.url = false;
      return this.url
    } else {
      this.url = true;
      return this.url
    }
  }
}
