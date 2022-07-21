import { Component, OnInit, ViewChild } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { ActivatedRoute } from '@angular/router';
import { APIService } from 'src/services/API/api.service';
import { MatSort } from '@angular/material/sort';
import { MatSortModule } from '@angular/material/sort';
@Component({
  selector: 'app-article',
  templateUrl: './article.component.html',
  styleUrls: ['./article.component.css']
})
export class ArticleComponent implements OnInit {
  sourceDetails: any;
  tags: any;
  displayedColumns: string[] = ['classname', 'class_type', 'identifier', 'enabled'];
  // displayedColumns = ['classname', 'class_type', 'identifier', 'enabled'];
  // dataSource !: MatTableDataSource<any>;

  positive = 1;
  negative = 0;
  dataSource = new MatTableDataSource<any>([]);

  @ViewChild(MatSort) matSort!: MatSort;

  constructor(private apiService: APIService, private activatedRoute: ActivatedRoute) { }



  ngOnInit(): void {
    //Load initial data

    this.activatedRoute.queryParams.subscribe((params) => {
      if (params && params['id']) {
        this.loadData(params['id']);
      }
    });

    this.apiService.getSourceDetails('id').subscribe((res:any) => {
      this.dataSource = new MatTableDataSource(res);
      this.dataSource.sort = this.matSort;
    })
  }

  filterData($event: any) {
    this.dataSource.filter = $event.target.value;
  }

  loadData(id: string) {
    this.apiService.getSourceDetails(id).subscribe((res) => {
      this.sourceDetails = res?.data?.result;

      this.apiService.getArticleClass(this.sourceDetails?.link).subscribe((res) => {
        console.log("response", res)

        this.dataSource.data = res.classes;
        this.dataSource.sort = this.matSort;

      })
      this.apiService.getArticleTag(this.sourceDetails?.link).subscribe((res) => {
        console.log("response", res)
        this.tags = res?.tags;

      })
    })


  }

  openlink(link: any) { window.open(link, '_blank'); }

  goToLink(url: string){
    window.open(url, "_blank");
}

  // openlink(link:any){  window.open(this.sourceDetails?.link, '_blank');  }
}


