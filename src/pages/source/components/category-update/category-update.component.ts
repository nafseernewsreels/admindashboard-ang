import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { APIService } from 'src/services/API/api.service';

@Component({
  selector: 'app-category-update',
  templateUrl: './category-update.component.html',
  styleUrls: ['./category-update.component.css']
})
export class CategoryUpdateComponent implements OnInit {

  constructor(
     public dialogRef: MatDialogRef<CategoryUpdateComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any,
    private apiService: APIService
  ) { }

  ngOnInit(): void {
  }

  updateCategory(){
    let data = {name : this.data.name, link : this.data.link}
    this.apiService.updateCategory(this.data.id, data).subscribe((res) => {
      console.log("res", res)
      this.dialogRef.close()
    })
  }

}
