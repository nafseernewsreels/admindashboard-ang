import { Component, Input, OnInit, ViewChild } from '@angular/core';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { APIService } from 'src/services/API/api.service';

@Component({
  selector: 'app-headline-preview',
  templateUrl: './headline-preview.component.html',
  styleUrls: ['./headline-preview.component.css']
})
export class HeadlinePreviewComponent implements OnInit {
  @Input() sourceID: string = '';
  @Input() templatesNames= ([] as any[]);
  @Input() urlTemplate:string = '';
  @Input() isFetchArticle = false;
  
  dataLinks = [];
  selectedTemplateNames = [];
templateArray = ([] as any[]);
isTemplateLoading = false;

isLoading = false;
displayedColumns: string[] = ['article_link', 'text', 'belongs' ];
selectedRow: {article_link: string, text: string, belongs: string} = {
  article_link: '',
  text: '',
  belongs: ''

};
dataSource = new MatTableDataSource<any>([]);

@ViewChild(MatSort) sort!: MatSort;

  constructor(private apiService: APIService) { }

  ngOnInit(): void {
  }

  getRecord(row:any){
    this.selectedRow = row;
    }
preview(){
  this.isLoading = true;
  let selectedTemplateNames = {source_id: this.sourceID,template:'', url: '' }
    let test = this.templatesNames.map((tempName: any) => {
      if(tempName.isChecked){
        return tempName?.value
      }
    })
    selectedTemplateNames.template = test.filter((e) => e).join(',')
      selectedTemplateNames.url = this.urlTemplate;
      
    

      this.apiService.getSourceHeadlinePreview(selectedTemplateNames).subscribe((res) => {
        console.log("response", res)
        
        this.dataSource.data = res?.links;
        this.dataSource.sort = this.sort;
        this.isLoading = false;
      })
}
}
