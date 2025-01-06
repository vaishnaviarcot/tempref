import { Component, OnInit } from '@angular/core';
import { Router, NavigationStart, NavigationEnd, NavigationError, RouterEvent } from '@angular/router';
import { filter } from 'rxjs/operators';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  title(title: any) {
    throw new Error('Method not implemented.');
  }

  constructor(private router: Router) {}
  ngOnInit() {
    this.router.events.pipe(
      filter(event => 
        event instanceof NavigationStart || 
        event instanceof NavigationEnd || 
        event instanceof NavigationError
      )
    ).subscribe((event) => {
      if (event instanceof NavigationStart) {
        console.log('Navigation started...');
      } else if (event instanceof NavigationEnd) {
        console.log('Navigation ended successfully');
      } else if (event instanceof NavigationError) {
        console.error('Navigation error:', event.error);
      }
    });
  }
}
