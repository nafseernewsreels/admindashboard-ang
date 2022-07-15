import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CategoryExpandComponent } from './category-expand.component';

describe('CategoryExpandComponent', () => {
  let component: CategoryExpandComponent;
  let fixture: ComponentFixture<CategoryExpandComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CategoryExpandComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CategoryExpandComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
