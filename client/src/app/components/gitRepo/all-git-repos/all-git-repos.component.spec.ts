import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AllGitReposComponent } from './all-git-repos.component';

describe('AllGitReposComponent', () => {
  let component: AllGitReposComponent;
  let fixture: ComponentFixture<AllGitReposComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AllGitReposComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AllGitReposComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
