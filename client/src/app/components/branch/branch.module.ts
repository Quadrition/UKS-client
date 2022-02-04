import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NewBranchDialogComponent } from './new-branch-dialog/new-branch-dialog.component';
import { BranchesListComponent } from './branches-list/branches-list.component';
import { MaterialModule } from '../material-module';
import { MatDialogModule } from '@angular/material/dialog';
import { EditBranchDialogComponent } from './edit-branch-dialog/edit-branch-dialog.component';

@NgModule({
  declarations: [
    NewBranchDialogComponent,
    BranchesListComponent,
    EditBranchDialogComponent,
  ],
  imports: [CommonModule, MaterialModule, MatDialogModule],
  exports: [BranchesListComponent],
})
export class BranchModule {}
