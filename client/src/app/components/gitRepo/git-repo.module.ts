import { MaterialModule } from './../material-module';
import { AllGitReposComponent } from "./all-git-repos/all-git-repos.component";

import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { MatDialogModule } from '@angular/material/dialog';
import { NewGitRepoComponent } from './new-git-repo/new-git-repo.component';
import { EditGitRepoComponent } from './edit-git-repo/edit-git-repo.component';

@NgModule({
    declarations: [AllGitReposComponent, NewGitRepoComponent, EditGitRepoComponent],
    imports: [ MaterialModule, RouterModule, MatDialogModule],
    exports: [AllGitReposComponent, NewGitRepoComponent,EditGitRepoComponent],
    providers: []
  })
  
  export class GitRepoModule { }