import { DatePipe } from '@angular/common';
import { NgModule } from '@angular/core';
import { MaterialModule } from '../material-module';
import { AllLabelApplicationsComponent } from './all-labelApplications/all-labelApplications.component';
import { EditLabelApplicationComponent } from './edit-labelApplication/edit-labelApplication.component';
import { NewLabelApplicationComponent } from './new-labelApplication/new-labelApplication.component';

@NgModule({
  declarations: [
    AllLabelApplicationsComponent,
    EditLabelApplicationComponent,
    NewLabelApplicationComponent
  ],
  imports: [MaterialModule],
  exports: [
    AllLabelApplicationsComponent,
    EditLabelApplicationComponent,
    NewLabelApplicationComponent
  ],
  providers: [DatePipe]
})

export class LabelApplicationModule { }
