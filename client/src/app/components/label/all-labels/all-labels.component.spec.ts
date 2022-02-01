import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AllLabelsComponent } from './all-labels.component';

describe('AllLabelsComponent', () => {
  let component: AllLabelsComponent;
  let fixture: ComponentFixture<AllLabelsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AllLabelsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AllLabelsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
