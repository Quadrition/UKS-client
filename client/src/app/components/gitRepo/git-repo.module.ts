import { MaterialModule } from './../material-module';
import { AllGitReposComponent } from './all-git-repos/all-git-repos.component';

import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { MatDialogModule } from '@angular/material/dialog';
import { NewGitRepoComponent } from './new-git-repo/new-git-repo.component';
import { EditGitRepoComponent } from './edit-git-repo/edit-git-repo.component';
import { RepoComponent } from './repo/repo.component';
import { BranchesListComponent } from '../branch/branches-list/branches-list.component';
import { BranchModule } from '../branch/branch.module';

@NgModule({
  declarations: [
    AllGitReposComponent,
    NewGitRepoComponent,
    EditGitRepoComponent,
    RepoComponent,
  ],
  imports: [MaterialModule, RouterModule, MatDialogModule, BranchModule],
  exports: [AllGitReposComponent, NewGitRepoComponent, EditGitRepoComponent],
  providers: [],
})
export class GitRepoModule {}
