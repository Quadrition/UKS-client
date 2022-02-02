import { DatePipe } from '@angular/common';
import { NgModule } from '@angular/core';
import { MatDialogModule } from '@angular/material/dialog';
import { RouterModule } from '@angular/router';
import { MaterialModule } from '../material-module';
import { AllLabelsComponent } from './all-labels/all-labels.component';
import { EditLabelComponent } from './edit-label/edit-label.component';
import { NewLabelComponent } from './new-label/new-label.component';

@NgModule({
  declarations: [AllLabelsComponent, EditLabelComponent, NewLabelComponent],
  imports: [ MaterialModule, RouterModule, MatDialogModule],
  exports: [AllLabelsComponent, EditLabelComponent, NewLabelComponent],
  providers: [DatePipe]
})

export class LabelModule { }
