import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewHeadlineClassComponent } from './view-headline-class.component';

describe('ViewHeadlineClassComponent', () => {
  let component: ViewHeadlineClassComponent;
  let fixture: ComponentFixture<ViewHeadlineClassComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ViewHeadlineClassComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ViewHeadlineClassComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
