import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';
import { APIService } from 'src/services/API/api.service';

@Component({
  selector: 'app-article-view-dialog',
  templateUrl: './article-view-dialog.component.html',
  styleUrls: ['./article-view-dialog.component.css']
})
export class ArticleViewDialogComponent implements OnInit {
articleCount:number = 0;
  constructor(public dialogRef: MatDialogRef<ArticleViewDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any, 
    private apiService: APIService) { }

  ngOnInit(): void {
    this.apiService.getArticleCount(this.data.sourceID).subscribe((res) => {
      console.log("article response", res)
       this.articleCount= res?.total
    })
  }

}
