import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditPullRequestComponent } from './edit-pull-request.component';

describe('EditPullRequestComponent', () => {
  let component: EditPullRequestComponent;
  let fixture: ComponentFixture<EditPullRequestComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditPullRequestComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EditPullRequestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
