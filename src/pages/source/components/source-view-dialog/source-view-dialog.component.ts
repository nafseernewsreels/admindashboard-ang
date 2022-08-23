import { Component, Inject, OnInit } from '@angular/core';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { MatTableDataSource } from '@angular/material/table';
import { ActivatedRoute, Router } from '@angular/router';
import { APIService } from 'src/services/API/api.service';
import { animate, state, style, transition, trigger } from '@angular/animations';
import { CategoryUpdateComponent } from '../category-update/category-update.component';
import { SelectionModel } from '@angular/cdk/collections';
import { Subject } from 'rxjs';

@Component({
  selector: 'app-source-view-dialog',
  templateUrl: './source-view-dialog.component.html',
  styleUrls: ['./source-view-dialog.component.css'],
  animations: [
    trigger('detailExpand', [
      state('collapsed', style({ height: '0px', minHeight: '0' })),
      state('expanded', style({ height: '*' })),
      transition('expanded <=> collapsed', animate('225ms cubic-bezier(0.4, 0.0, 0.2, 1)')),
    ]),
  ],
})
export class SourceViewDialogComponent implements OnInit {
  data: any;
  isArticle: boolean = false;
  viewAll: boolean = false;
  updateData: { name: string, link: string } = { name: '', link: '' }
  categories = ([] as any[]);
  headLineClass = ([] as any[]);
  category: any;
  displayedColumns: string[] = ['select', 'id', 'article', 'news', 'link', 'status', 'actions', 'category'];
  columnsToDisplayWithExpand = [...this.displayedColumns];
  expandedElement: any | null;
  dataSource = new MatTableDataSource<any>([]);
  templatesNames = ([] as any[]);
  selection = new SelectionModel<any>(true, []);
  selectedHeadeClass: any;
  isFetchArticle = false;

  constructor(
    //public dialogRef: MatDialogRef<SourceViewDialogComponent>,
    //@Inject(MAT_DIALOG_DATA) public data: any,
    public dialog: MatDialog,
    private router: Router, private activatedRoute: ActivatedRoute, private apiService: APIService) { }

  ngOnInit(): void {
    this.activatedRoute.queryParams.subscribe((params) => {
      if (params) {
        this.data = params;
        this.isArticle = params['isArticle'] == 'true' ? true : false;
        this.viewAll = params['viewAll'] == 'true' ? true : false;
        this.getCategories(this.data?.id)
      }
    });
  }
  getCategory(id: string) {
    this.apiService.getCategory(id).subscribe((res) => {
      console.log("res", res)
      this.category = res?.data;
    })
  }
  getCategories(id: string) {
    this.apiService.getListofTemplates().subscribe((res) => {
      this.templatesNames = res?.templates;
      this.templatesNames = this.templatesNames.map(obj => {

        return { ...obj, isChecked: true };

      });
    })
    this.apiService.getCategories(id).subscribe((res) => {
      console.log("res", res)
      let data = res.data.map((eachData: any) => {
        eachData.isEdit = false;
        return eachData;
      })
      this.dataSource.data = data;
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


  updateCategory(id: string): void {
    // this.dialog.open(CategoryUpdateComponent, {
    //   width: '500px',
    //   data: category,
    // });
    console.log("idd", id)
    let data = this.dataSource.data;
    data = data.map(obj => {
      if (obj.id === id) {
        this.updateData.name = obj.name
        this.updateData.link = obj.link
        return { ...obj, isEdit: true };
      } else {
        return { ...obj, isEdit: false };
      }

    });
    console.log("data", data)
    this.dataSource.data = data
  }
  updateCategoryByID(id: string) {
    this.apiService.updateCategory(id, this.updateData).subscribe((res) => {
      console.log("res", res)
      let data = this.dataSource.data;
      data = data.map(obj => {
        if (obj.id === res.data.result.id) {
          return { ...obj, isEdit: false, name: res.data.result.name, link: res.data.result.link };
        } else {
          return { ...obj, isEdit: false };
        }

      });
      console.log("data", data)
      this.dataSource.data = data
    })
  }
  cancel() {
    let data = this.dataSource.data;
    data = data.map((eachData: any) => {
      eachData.isEdit = false;
      return eachData;
    })
    this.dataSource.data = data
  }
  deleteCategory(id: string) {
    this.apiService.deleteCategory(id).subscribe((res) => {
      console.log("response", res)
    })
  }

  onValueChage(event: any) {
    console.log(event)
  }
  selectionChange(element: any) {
    this.selection.clear();
    this.selection.toggle(element);
    this.selectedHeadeClass = this.selection.selected.length ? this.selection.selected[0] : null;
  }

  fetchArticle() {
    if (this.selectedHeadeClass) {
      console.log("selectedHeadeClass", this.selectedHeadeClass)
      this.isFetchArticle = true;

    }
  }

}
