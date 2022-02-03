import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AllStateChangesComponent } from './all-state-changes.component';

describe('AllStateChangesComponent', () => {
  let component: AllStateChangesComponent;
  let fixture: ComponentFixture<AllStateChangesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AllStateChangesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AllStateChangesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
