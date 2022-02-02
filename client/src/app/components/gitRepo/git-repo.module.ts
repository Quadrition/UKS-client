import { MaterialModule } from './../material-module';
import { AllGitReposComponent } from "./all-git-repos/all-git-repos.component";

import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { MatDialogModule } from '@angular/material/dialog';

@NgModule({
    declarations: [AllGitReposComponent],
    imports: [ MaterialModule, RouterModule, MatDialogModule],
    exports: [AllGitReposComponent],
    providers: []
  })
  
  export class GitRepoModule { }