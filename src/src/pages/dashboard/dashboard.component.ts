import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  title = 'admin-dashboard';

  quickLinks = [
    {name: 'Sources', url : 'source'},
    {name: 'Editions', url : ''},
    {name: 'Articles', url : ''},
    {name: 'Topics', url : ''},
    {name: 'Location', url : ''},
    {name: 'Category', url : ''},
    {name: 'Audio Map', url : ''},
    {name: 'Negative Bullet', url : ''},
    {name: 'Negative Headline', url : ''},
    {name: 'Negative URL', url : ''},
    {name: 'Template Preview', url : ''},
    {name: 'Flagged Sources', url : ''}
  ]
  constructor() { }

  ngOnInit(): void {
  }

}
