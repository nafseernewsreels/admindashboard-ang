import { Component, Input, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { ActivatedRoute } from '@angular/router';

import { FormBuilder } from '@angular/forms';
import { forkJoin } from 'rxjs';
import { APIService } from 'src/services/API/api.service';

@Component({
  selector: 'app-template-preview',
  templateUrl: './template-preview.component.html',
  styleUrls: ['./template-preview.component.css']
})
export class TemplatePreviewComponent implements OnInit {
  @Input() sourceID: string = '';
  @Input() templatesNames= ([] as any[]);
  sourceDetails: any;
  dataSource = new MatTableDataSource<any>([]);

  dataLinks = [];

  selectedTemplateNames = [];
templateArray = ([] as any[]);
isTemplateLoading = false;
urlTemplate = '';
  constructor(private _formBuilder: FormBuilder, private apiService: APIService,private activatedRoute: ActivatedRoute) {}
  ngOnInit(): void {

    this.apiService.getSourceArticleLink(this.sourceID).subscribe((res) => {
      this.dataLinks = res?.data?.result
    })


    this.activatedRoute.queryParams.subscribe((params) => {
      if (params && params['id']) {
        this.loadData(params['id']);
      }
    });

    this.apiService.getSourceDetails('id').subscribe((res:any) => {
      this.dataSource = new MatTableDataSource(res);
    })

  }

  preview(){
    this.isTemplateLoading = true;
    // let apis = [];
    // let params = [];
    // for(let link of this.dataLinks){
      let selectedTemplateNames = {templates_names:([] as any[]), url: '' }
    let test = this.templatesNames.map((tempName: any) => {
      if(tempName.isChecked){
        return tempName?.value
      }
    })
    selectedTemplateNames.templates_names = test.filter((e) => e)
      selectedTemplateNames.url = this.urlTemplate;
    //  params.push(selectedTemplateNames)
    // }
    // for(let param of params){
    //   apis.push(this.apiService.getSourceTemplatePreview(param))
    // }
   
    // console.log("apis", apis)
    // forkJoin(
    //   apis
    // )
    this.apiService.getSourceTemplatePreview(selectedTemplateNames).subscribe((res) => {
      console.log("res", res)
        console.log("res", res.articles)
        this.templateArray = [...res.articles];
      this.isTemplateLoading = false;
      console.log("this.templateArray", this.templateArray)
    })

    //this.apiService.getSourceTemplatePreview()


  }


  loadData(id: string) {
    this.apiService.getSourceDetails(id).subscribe((res) => {
      this.sourceDetails = res?.data?.result;

      this.apiService.getArticleClass(this.sourceDetails?.link).subscribe((res) => {
        console.log("response", res)

        this.dataSource.data = res.classes;

      })
      
    })


  }

}
