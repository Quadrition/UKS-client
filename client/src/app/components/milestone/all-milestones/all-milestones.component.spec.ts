import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AllMilestonesComponent } from './all-milestones.component';

describe('AllMilestonesComponent', () => {
  let component: AllMilestonesComponent;
  let fixture: ComponentFixture<AllMilestonesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AllMilestonesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AllMilestonesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
