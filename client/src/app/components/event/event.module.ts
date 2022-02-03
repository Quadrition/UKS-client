import { DatePipe } from '@angular/common';
import { NgModule } from '@angular/core';
import { MaterialModule } from '../material-module';
import { AllEventsComponent } from './all-events/all-events.component';
import { EditEventComponent } from './edit-event/edit-event.component';
import { NewEventComponent } from './new-event/new-event.component';

@NgModule({
  declarations: [
    AllEventsComponent,
    EditEventComponent,
    NewEventComponent
  ],
  imports: [MaterialModule],
  exports: [
    AllEventsComponent,
    EditEventComponent,
    NewEventComponent
  ],
  providers: [DatePipe]
})

export class EventModule { }
