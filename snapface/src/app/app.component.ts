import { Component, OnInit } from '@angular/core';
import { Observable, filter, interval, map } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})

export class AppComponent implements OnInit {

  interval$!: Observable<number>;

  ngOnInit(): void {

  }

}
