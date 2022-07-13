import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';
import { Router } from '@angular/router';

@Component({
  selector: 'app-source-view-dialog',
  templateUrl: './source-view-dialog.component.html',
  styleUrls: ['./source-view-dialog.component.css']
})
export class SourceViewDialogComponent implements OnInit {

  constructor(public dialogRef: MatDialogRef<SourceViewDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any, private router: Router) { }

  ngOnInit(): void {
  }
  articleview(id: string): void {
    this.router.navigate(
      ['/source/article'],
      { queryParams: { id: id } }
    );
    // this.router.navigate(["source/article", id]);
    this.dialogRef.close();
  }
}
