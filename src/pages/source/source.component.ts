import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import {MatPaginator, PageEvent} from '@angular/material/paginator';
import {MatTableDataSource} from '@angular/material/table';
import { APIService } from 'src/services/API/api.service';
import {MatDialog} from '@angular/material/dialog';
import { SourceViewDialogComponent } from './components/source-view-dialog/source-view-dialog.component';
import {animate, state, style, transition, trigger} from '@angular/animations';
import { ArticleViewDialogComponent } from './components/article-view-dialog/article-view-dialog.component';
import { Router } from '@angular/router';


@Component({
  selector: 'app-source',
  templateUrl: './source.component.html',
  styleUrls: ['./source.component.css'],
  animations: [
    trigger('detailExpand', [
      state('collapsed', style({height: '0px', minHeight: '0'})),
      state('expanded', style({height: '*'})),
      transition('expanded <=> collapsed', animate('225ms cubic-bezier(0.4, 0.0, 0.2, 1)')),
    ]),
  ],
})
export class SourceComponent implements AfterViewInit, OnInit {
  isLoading = false;
  totalRows = 0;
  pageSize = 50;
  currentPage = 0;
  pageSizeOptions: number[] = [10, 50, 100];
  categories = ([] as any[]);
  searchKey = ""



  displayedColumns: string[] = ['name', 'noOfArticles', 'edition', 'status','follower' , 'action' ];
  columnsToDisplayWithExpand = [...this.displayedColumns ];
  expandedElement: any | null;
  dataSource = new MatTableDataSource<any>([]);

  @ViewChild(MatPaginator) paginator!: MatPaginator;
constructor(private apiService : APIService, public dialog: MatDialog,
  private router: Router){

}
ngAfterViewInit() {
  console.log("paginator", this.paginator.page, this.paginator.pageIndex)
  this.dataSource.paginator = this.paginator;
}

ngOnInit(): void {
  //Load initial data
  this.loadData();
}

loadData() {
  this.isLoading = true;

  this.apiService.getSourceData(this.pageSize, this.currentPage).subscribe((res) => {
    console.log("response", res)
          setTimeout(() => {
            this.dataSource.data = res.data.result;
        this.paginator.pageIndex = this.currentPage ;
        this.paginator.length = res.data.total_page;
        this.totalRows = res.data.total_page;
      });
    this.isLoading = false;
  })

}

sourceView(sourceData: any, isArticle: boolean, viewAll: boolean): void {
  let data = sourceData;
  data.isArticle = isArticle;
  data.viewAll = viewAll;
  this.router.navigate(
    ['/source/sourcedetail'],
    { queryParams: data }
  );
  // this.dialog.open(SourceViewDialogComponent, {
  //   data: sourceData,
  //   panelClass: 'fullscreen-dialog',

  //       width: '100%'
  // });
}
getCategories(id: string){
  this.apiService.getCategories(id).subscribe((res) => {
    console.log("res", res)
  this.categories = res?.data;
  })
}
editionView(): void {
  this.dialog.open(SourceViewDialogComponent, {
    width: '250px'
  });
}
articleView(id: string): void {
  this.dialog.open(ArticleViewDialogComponent, {
    width: '500px',
    data: {sourceID: id},
  });
}

pageChanged(event: PageEvent) {
  console.log({ event });
  this.pageSize = event.pageSize;
  this.currentPage = event.pageIndex;
  this.loadData();
}
searchSource(){
  this.apiService.searchSource(this.searchKey).subscribe((res) => {

  })
}

filterData($event : any){
  this.dataSource.filter = $event.target.value;
}
}



