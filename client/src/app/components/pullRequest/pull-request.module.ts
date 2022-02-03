import { MaterialModule } from './../material-module';

import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { MatDialogModule } from '@angular/material/dialog';
import { AllPullRequestsComponent } from './all-pull-requests/all-pull-requests.component';
import { EditPullRequestComponent } from './edit-pull-request/edit-pull-request.component';

@NgModule({
    declarations: [
    AllPullRequestsComponent,
    EditPullRequestComponent
  ],
    imports: [ MaterialModule, RouterModule, MatDialogModule],
    exports:[AllPullRequestsComponent,EditPullRequestComponent],
    providers: []
  })
  
export class PullReqModule { }