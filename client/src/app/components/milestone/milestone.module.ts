import { DatePipe } from '@angular/common';
import { NgModule } from '@angular/core';
import { MaterialModule } from '../material-module';
import { AllMilestonesComponent } from './all-milestones/all-milestones.component';
import { EditMilestoneComponent } from './edit-milestone/edit-milestone.component';
import { NewMilestoneComponent } from './new-milestone/new-milestone.component';

@NgModule({
  declarations: [
   
    AllMilestonesComponent,
        EditMilestoneComponent,
        NewMilestoneComponent
  ],
  imports: [MaterialModule],
  exports: [AllMilestonesComponent,
    EditMilestoneComponent,
    NewMilestoneComponent],
  providers: [DatePipe]
})

export class MilestoneModule { }
