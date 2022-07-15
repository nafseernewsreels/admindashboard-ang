import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditionDialogueComponent } from './edition-dialogue.component';

describe('EditionDialogueComponent', () => {
  let component: EditionDialogueComponent;
  let fixture: ComponentFixture<EditionDialogueComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditionDialogueComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EditionDialogueComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
