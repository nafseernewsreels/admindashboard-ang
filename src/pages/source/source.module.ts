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
import { CategoryExpandComponent } from './components/category-expand/category-expand.component';
import { CategoryUpdateComponent } from './components/category-update/category-update.component';
import { TemplatePreviewComponent } from './components/template-preview/template-preview.component';
import {MatCardModule} from '@angular/material/card';
import { MatSortModule } from '@angular/material/sort';
import {MatSelectModule} from '@angular/material/select';
import { ViewHeadlineClassComponent } from './components/view-headline-class/view-headline-class.component';
import { ViewArticleClassComponent } from './components/view-article-class/view-article-class.component';
import { HeadlinePreviewComponent } from './components/headline-preview/headline-preview.component';


@NgModule({
  declarations: [
    SourceComponent,
    SourceViewDialogComponent,
    ArticleViewDialogComponent,
    EditionViewDialogComponent,
    EditionDialogueComponent,
    ArticleComponent,
    CategoryExpandComponent,
    CategoryUpdateComponent,
    TemplatePreviewComponent,
    ViewHeadlineClassComponent,
    ViewArticleClassComponent,
    HeadlinePreviewComponent
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
    MatRadioModule,
    MatCardModule,
    MatSortModule,
    MatSelectModule
  ]
})
export class SourceModule { }
