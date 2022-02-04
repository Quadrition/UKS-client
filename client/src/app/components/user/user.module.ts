import { DatePipe } from '@angular/common';
import { NgModule } from '@angular/core';
import { MaterialModule } from '../material-module';
import { UserChooserComponent } from './user-chooser/user-chooser.component';
import { ProfileDetailsComponent } from './profile-details/profile-details.component';

@NgModule({
  declarations: [
   
    UserChooserComponent,
         ProfileDetailsComponent
  ],
  imports: [MaterialModule],
  exports: [],
  providers: [DatePipe]
})

export class UserModule { }
