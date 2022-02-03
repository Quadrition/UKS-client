import { MaterialModule } from './../material-module';

import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { MatDialogModule } from '@angular/material/dialog';
import { AllPullRequestsComponent } from './all-pull-requests/all-pull-requests.component';

@NgModule({
    declarations: [
    AllPullRequestsComponent
  ],//[AllGitReposComponent, NewGitRepoComponent, EditGitRepoComponent],
    imports: [ MaterialModule, RouterModule, MatDialogModule],
    exports:[AllPullRequestsComponent],// [AllGitReposComponent, NewGitRepoComponent,EditGitRepoComponent],
    providers: []
  })
  
export class PullReqModule { }