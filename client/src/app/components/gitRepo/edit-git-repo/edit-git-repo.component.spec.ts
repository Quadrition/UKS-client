import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditGitRepoComponent } from './edit-git-repo.component';

describe('EditGitRepoComponent', () => {
  let component: EditGitRepoComponent;
  let fixture: ComponentFixture<EditGitRepoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditGitRepoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EditGitRepoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
