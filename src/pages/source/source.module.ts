import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SourceRoutingModule } from './source-routing.module';
import { SourceComponent } from '../source/source.component';
import {MatTableModule} from '@angular/material/table';
import {MatPaginatorModule} from '@angular/material/paginator';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import {MatSlideToggleModule} from '@angular/material/slide-toggle';
import { SourceViewDialogComponent } from './components/source-view-dialog/source-view-dialog.component';
import { ArticleViewDialogComponent } from './components/article-view-dialog/article-view-dialog.component';
import {MatDialogModule} from '@angular/material/dialog';
import {MatIconModule} from '@angular/material/icon';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { EditionViewDialogComponent } from './components/edition-view-dialog/edition-view-dialog.component';
import { EditionDialogueComponent } from './components/edition-dialogue/edition-dialogue.component';
import {MatFormFieldModule} from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import {MatGridListModule} from '@angular/material/grid-list';
import {MatCheckboxModule} from '@angular/material/checkbox';
import { ArticleComponent } from './components/article/article.component';
import {MatRadioModule} from '@angular/material/radio';

@NgModule({
  declarations: [
    SourceComponent,
    SourceViewDialogComponent,
    ArticleViewDialogComponent,
    EditionViewDialogComponent,
    EditionDialogueComponent,
    ArticleComponent
  ],
  imports: [
    CommonModule,
    SourceRoutingModule,
    MatTableModule,
    MatPaginatorModule,
    MatProgressBarModule,
    MatSlideToggleModule,
    MatDialogModule,
    MatIconModule,
    FormsModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatGridListModule,
    MatCheckboxModule,
    MatRadioModule
  ]
})
export class SourceModule { }
