import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { ActivatedRoute } from '@angular/router';
import { APIService } from 'src/services/API/api.service';

@Component({
  selector: 'app-article',
  templateUrl: './article.component.html',
  styleUrls: ['./article.component.css']
})
export class ArticleComponent implements OnInit {
  sourceDetails: any;
  tags: any;
  displayedColumns: string[] = ['classname', 'class_type', 'identifier', 'enabled' ];
  dataSource = new MatTableDataSource<any>([]);
  constructor(private apiService: APIService, private activatedRoute: ActivatedRoute) { }

  ngOnInit(): void {
    //Load initial data
    
    this.activatedRoute.queryParams.subscribe((params) => {
      if(params && params['id']){
        this.loadData(params['id']);
      }
      });  
  }
  
  loadData(id:string) {
    this.apiService.getSourceDetails(id).subscribe((res) =>{
      this.sourceDetails = res?.data?.result;
this.apiService.getArticleClass(   this.sourceDetails?.link).subscribe((res) => {
      console.log("response", res)

              this.dataSource.data = res.classes;

    })
    this.apiService.getArticleTag(   this.sourceDetails?.link).subscribe((res) => {
      console.log("response", res)
this.tags = res?.tags;

    })
    })
    
  
  }
}
