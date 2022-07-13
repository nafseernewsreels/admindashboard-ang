import { Component, OnInit } from '@angular/core';
import { MatDialogRef} from '@angular/material/dialog';

@Component({
  selector: 'app-edition-dialogue',
  templateUrl: './edition-dialogue.component.html',
  styleUrls: ['./edition-dialogue.component.css']
})
export class EditionDialogueComponent implements OnInit {

  constructor(public dialogRef: MatDialogRef<EditionDialogueComponent>) { }

  ngOnInit(): void {
  }

}
