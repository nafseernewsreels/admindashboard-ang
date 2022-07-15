import { Component, Inject, OnInit } from '@angular/core';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';
import { MatTableDataSource } from '@angular/material/table';
import { ActivatedRoute, Router } from '@angular/router';
import { APIService } from 'src/services/API/api.service';
import {animate, state, style, transition, trigger} from '@angular/animations';
import { CategoryUpdateComponent } from '../category-update/category-update.component';

@Component({
  selector: 'app-source-view-dialog',
  templateUrl: './source-view-dialog.component.html',
  styleUrls: ['./source-view-dialog.component.css'],
  animations: [
    trigger('detailExpand', [
      state('collapsed', style({height: '0px', minHeight: '0'})),
      state('expanded', style({height: '*'})),
      transition('expanded <=> collapsed', animate('225ms cubic-bezier(0.4, 0.0, 0.2, 1)')),
    ]),
  ],
})
export class SourceViewDialogComponent implements OnInit {
  data:any;
  categories = ([] as any[]);
  headLineClass = ([] as any[]);
  category: any;
  displayedColumns: string[] = ['id', 'article', 'news', 'link','status', 'actions' , 'category'];
  columnsToDisplayWithExpand = [...this.displayedColumns ];
  expandedElement: any | null;
  dataSource = new MatTableDataSource<any>([]);
  constructor(
    //public dialogRef: MatDialogRef<SourceViewDialogComponent>,
    //@Inject(MAT_DIALOG_DATA) public data: any,
    public dialog: MatDialog,
     private router: Router,  private activatedRoute: ActivatedRoute, private apiService: APIService) { }

  ngOnInit(): void {
    this.activatedRoute.queryParams.subscribe((params) => {
      if(params ){
this.data = params;
this.getCategories(this.data?.id)
      }
      });  
  }
  getCategory(id: string){
    this.apiService.getCategory(id).subscribe((res) => {
      console.log("res", res)
    this.category = res?.data;
    })
  }
  getCategories(id: string){
    this.apiService.getCategories(id).subscribe((res) => {
      console.log("res", res)
      this.dataSource.data = res.data;
    // this.categories = res?.data;
    })
  }
  articleview(id: string): void {
    this.router.navigate(
      ['/source/article'],
      { queryParams: { id: id } }
    );
    // this.router.navigate(["source/article", id]);
    //this.dialogRef.close();
  }


  updateCategory(category: any): void {
    this.dialog.open(CategoryUpdateComponent, {
      width: '500px',
      data: category,
    });
  }

  deleteCategory(id: string){
    this.apiService.deleteCategory(id).subscribe((res) => {
      console.log("response", res)
    })
  }
  
}
