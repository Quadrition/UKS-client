import { DatePipe } from '@angular/common';
import { NgModule } from '@angular/core';
import { MatDialogModule } from '@angular/material/dialog';
import { RouterModule } from '@angular/router';
import { MaterialModule } from '../material-module';
import { AllStateChangesComponent } from './all-state-changes/all-state-changes.component';
import { EditStateChangeComponent } from './edit-state-change/edit-state-change.component';
import { NewStateChangeComponent } from './new-state-change/new-state-change.component';

@NgModule({
  declarations: [AllStateChangesComponent, EditStateChangeComponent, NewStateChangeComponent],
  imports: [ MaterialModule, RouterModule, MatDialogModule],
  exports: [AllStateChangesComponent, EditStateChangeComponent, NewStateChangeComponent],
  providers: [DatePipe]
})

export class StateChangeModule { }
