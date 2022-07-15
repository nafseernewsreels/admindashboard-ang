import { Component, Input, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';

@Component({
  selector: 'app-category-expand',
  templateUrl: './category-expand.component.html',
  styleUrls: ['./category-expand.component.css']
})
export class CategoryExpandComponent implements OnInit {
  @Input() Category: any;
  @Input() headLineClass = ([] as any[]);
  displayedColumns: string[] = ['classname', 'class_type', 'enabled' ];
  dataSource = new MatTableDataSource<any>([]);
  constructor() { }

  ngOnInit(): void {
    this.dataSource.data = this.headLineClass;
  }

}
