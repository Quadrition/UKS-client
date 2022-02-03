import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NewStateChangeComponent } from './new-state-change.component';

describe('NewStateChangeComponent', () => {
  let component: NewStateChangeComponent;
  let fixture: ComponentFixture<NewStateChangeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NewStateChangeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NewStateChangeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
