import { MaterialModule } from './../material-module';
import { AllGitReposComponent } from "./all-git-repos/all-git-repos.component";

import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { MatDialogModule } from '@angular/material/dialog';
import { NewGitRepoComponent } from './new-git-repo/new-git-repo.component';

@NgModule({
    declarations: [AllGitReposComponent, NewGitRepoComponent],
    imports: [ MaterialModule, RouterModule, MatDialogModule],
    exports: [AllGitReposComponent, NewGitRepoComponent],
    providers: []
  })
  
  export class GitRepoModule { }