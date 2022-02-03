import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AllPullRequestsComponent } from './all-pull-requests.component';

describe('AllPullRequestsComponent', () => {
  let component: AllPullRequestsComponent;
  let fixture: ComponentFixture<AllPullRequestsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AllPullRequestsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AllPullRequestsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
