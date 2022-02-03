import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditStateChangeComponent } from './edit-state-change.component';

describe('EditStateChangeComponent', () => {
  let component: EditStateChangeComponent;
  let fixture: ComponentFixture<EditStateChangeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditStateChangeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EditStateChangeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
