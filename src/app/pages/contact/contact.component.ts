import {Component, OnDestroy} from '@angular/core';
import {ActivatedRoute} from "@angular/router";

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent implements OnDestroy{
  constructor() {
    localStorage.setItem('contact', JSON.stringify(true));
  }

  ngOnDestroy() {
    localStorage.removeItem('contact');
  }
}
