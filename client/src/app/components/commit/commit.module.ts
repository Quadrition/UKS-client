import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaterialModule } from '../material-module';
import { MatDialogModule } from '@angular/material/dialog';
import { CommitsListComponent } from './commits-list/commits-list.component';

@NgModule({
  declarations: [CommitsListComponent],
  imports: [CommonModule, MaterialModule, MatDialogModule],
  exports: [CommitsListComponent],
})
export class CommitModule {}
