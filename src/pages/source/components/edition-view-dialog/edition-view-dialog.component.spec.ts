import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditionViewDialogComponent } from './edition-view-dialog.component';

describe('EditionViewDialogComponent', () => {
  let component: EditionViewDialogComponent;
  let fixture: ComponentFixture<EditionViewDialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditionViewDialogComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EditionViewDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
