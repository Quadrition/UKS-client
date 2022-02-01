import { NgModule } from '@angular/core';
import { MaterialModule } from '../material-module';
import { AllIssuesComponent } from './all-issues/all-issues.component';
import { EditIssueComponent } from './edit-issue/edit-issue.component';

@NgModule({
  declarations: [AllIssuesComponent, EditIssueComponent],
  imports: [ MaterialModule],
  exports: [AllIssuesComponent, EditIssueComponent],
  providers: []
})

export class IssueModule { }
