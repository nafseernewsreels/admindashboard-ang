import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HeadlinePreviewComponent } from './headline-preview.component';

describe('HeadlinePreviewComponent', () => {
  let component: HeadlinePreviewComponent;
  let fixture: ComponentFixture<HeadlinePreviewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HeadlinePreviewComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HeadlinePreviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
