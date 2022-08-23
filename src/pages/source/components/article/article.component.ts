import { Component, Input, OnInit, ViewChild } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { ActivatedRoute } from '@angular/router';
import { APIService } from 'src/services/API/api.service';
import { MatSort } from '@angular/material/sort';

@Component({
  selector: 'app-article',
  templateUrl: './article.component.html',
  styleUrls: ['./article.component.css']
})
export class ArticleComponent implements OnInit {
  @Input() sourceID: string = '';
  sourceDetails: any;
  tags: any;
  displayedColumns: string[] = ['classname', 'class_type', 'identifier', 'enabled'];
  selectedRow: {id: string, _id: string,enabled: boolean,source: string, classname: string, class_type: string, identifier: string} = {
    id: '',
    _id: '',
    enabled: true,
    source: '',
    class_type: '',
    classname: '',
    identifier: ''
  };
  // displayedColumns = ['classname', 'class_type', 'identifier', 'enabled'];
  // dataSource !: MatTableDataSource<any>;

  positive = 1;
  negative = 0;
  dataSource = new MatTableDataSource<any>([]);

  @ViewChild(MatSort) sort!: MatSort;

  constructor(private apiService: APIService, private activatedRoute: ActivatedRoute) { }



  ngOnInit(): void {
    //Load initial data

    // this.activatedRoute.queryParams.subscribe((params) => {
    //   if (params && params['id']) {
        this.loadData(this.sourceID);
    //   }
    // });

    // this.apiService.getSourceDetails('id').subscribe((res:any) => {
    //   this.dataSource = new MatTableDataSource(res);
    //   this.dataSource.sort = this.sort;
    // })
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
        //this.selectedRow = this.dataSource.data[0]
        this.dataSource.sort = this.sort;

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
getRecord(row:any){
this.selectedRow = row;
}
  // openlink(link:any){  window.open(this.sourceDetails?.link, '_blank');  }

  updateArticleClass(){
    this.selectedRow.id = this.selectedRow._id;
this.apiService.updateArticleClass(this.selectedRow).subscribe((res) => {
  console.log("res", res)
})
  }

  addArticleClass(){
    this.apiService.updateArticleClass(this.selectedRow).subscribe((res) => {
      console.log("res", res)
    })
  }
}


