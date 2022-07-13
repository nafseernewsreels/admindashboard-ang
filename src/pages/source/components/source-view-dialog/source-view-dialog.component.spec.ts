import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SourceViewDialogComponent } from './source-view-dialog.component';

describe('SourceViewDialogComponent', () => {
  let component: SourceViewDialogComponent;
  let fixture: ComponentFixture<SourceViewDialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SourceViewDialogComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SourceViewDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
