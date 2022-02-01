import { NgModule } from '@angular/core';
import { MaterialModule } from '../material-module';
import { AllLabelsComponent } from './all-labels/all-labels.component';

@NgModule({
  declarations: [AllLabelsComponent],
  imports: [ MaterialModule],
  exports: [AllLabelsComponent],
  providers: []
})

export class LabelModule { }
