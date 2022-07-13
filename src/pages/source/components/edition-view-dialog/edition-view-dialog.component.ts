import { Component, OnInit } from '@angular/core';
import { MatDialogRef} from '@angular/material/dialog';

@Component({
  selector: 'app-edition-view-dialog',
  templateUrl: './edition-view-dialog.component.html',
  styleUrls: ['./edition-view-dialog.component.css']
})
export class EditionViewDialogComponent implements OnInit {

  constructor(public dialogRef: MatDialogRef<EditionViewDialogComponent>) { }

  ngOnInit(): void {
  }

}
