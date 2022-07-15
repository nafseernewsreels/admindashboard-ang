import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ArticleComponent } from './components/article/article.component';
import { SourceViewDialogComponent } from './components/source-view-dialog/source-view-dialog.component';
import { SourceComponent } from './source.component';

const routes: Routes = [
  {
    path: '',
    component: SourceComponent
  },
  {
    path: 'sourcedetail',
    component: SourceViewDialogComponent
  },
  {
    path: 'article',
    component: ArticleComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SourceRoutingModule { }
