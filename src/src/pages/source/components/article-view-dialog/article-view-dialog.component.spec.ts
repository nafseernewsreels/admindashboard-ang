import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ArticleViewDialogComponent } from './article-view-dialog.component';

describe('ArticleViewDialogComponent', () => {
  let component: ArticleViewDialogComponent;
  let fixture: ComponentFixture<ArticleViewDialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ArticleViewDialogComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ArticleViewDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
