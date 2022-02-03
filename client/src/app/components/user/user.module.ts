import { DatePipe } from '@angular/common';
import { NgModule } from '@angular/core';
import { MaterialModule } from '../material-module';
import { UserChooserComponent } from './user-chooser/user-chooser.component';

@NgModule({
  declarations: [
   
    UserChooserComponent
  ],
  imports: [MaterialModule],
  exports: [],
  providers: [DatePipe]
})

export class UserModule { }
