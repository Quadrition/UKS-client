import { NgModule } from '@angular/core';
import { MaterialModule } from '../material-module';
import { AllProjectsComponent } from './all-projects/all-projects.component';
import { EditProjectComponent } from './edit-project/edit-project.component';

@NgModule({
  declarations: [
    AllProjectsComponent,
    EditProjectComponent],
  imports: [MaterialModule],
  exports: [AllProjectsComponent, EditProjectComponent],
  providers: []
})

export class ProjectModule { }
