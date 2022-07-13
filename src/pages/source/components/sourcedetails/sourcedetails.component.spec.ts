import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SourcedetailsComponent } from './sourcedetails.component';

describe('SourcedetailsComponent', () => {
  let component: SourcedetailsComponent;
  let fixture: ComponentFixture<SourcedetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SourcedetailsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SourcedetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
