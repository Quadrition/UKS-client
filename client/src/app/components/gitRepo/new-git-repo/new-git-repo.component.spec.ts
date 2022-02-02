import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NewGitRepoComponent } from './new-git-repo.component';

describe('NewGitRepoComponent', () => {
  let component: NewGitRepoComponent;
  let fixture: ComponentFixture<NewGitRepoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NewGitRepoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NewGitRepoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
