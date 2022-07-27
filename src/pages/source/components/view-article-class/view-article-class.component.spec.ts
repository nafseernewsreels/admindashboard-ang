import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewArticleClassComponent } from './view-article-class.component';

describe('ViewArticleClassComponent', () => {
  let component: ViewArticleClassComponent;
  let fixture: ComponentFixture<ViewArticleClassComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ViewArticleClassComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ViewArticleClassComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
