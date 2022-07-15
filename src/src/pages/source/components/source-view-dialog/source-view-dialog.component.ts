import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';
import { MatTableDataSource } from '@angular/material/table';
import { ActivatedRoute, Router } from '@angular/router';
import { APIService } from 'src/services/API/api.service';

@Component({
  selector: 'app-source-view-dialog',
  templateUrl: './source-view-dialog.component.html',
  styleUrls: ['./source-view-dialog.component.css']
})
export class SourceViewDialogComponent implements OnInit {
  data:any;

  displayedColumns: string[] = ['id', 'article', 'news', 'link','status', 'actions' ];
  dataSource = new MatTableDataSource<any>([]);
  constructor(
    //public dialogRef: MatDialogRef<SourceViewDialogComponent>,
    //@Inject(MAT_DIALOG_DATA) public data: any,
     private router: Router,  private activatedRoute: ActivatedRoute, private apiService: APIService) { }

  ngOnInit(): void {
    this.activatedRoute.queryParams.subscribe((params) => {
      if(params ){
this.data = params;
this.getCategories(this.data?.id)
      }
      });  
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
}
