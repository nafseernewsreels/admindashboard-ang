import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DashboardReelsComponent } from './dashboard-reels.component';

describe('DashboardReelsComponent', () => {
  let component: DashboardReelsComponent;
  let fixture: ComponentFixture<DashboardReelsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DashboardReelsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DashboardReelsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
