import { DatePipe } from '@angular/common';
import { NgModule } from '@angular/core';
import { MaterialModule } from '../material-module';
import { AllProjectsComponent } from './all-projects/all-projects.component';
import { EditProjectComponent } from './edit-project/edit-project.component';
import { NewProjectComponent } from './new-project/new-project.component';
import { ProjectDetailsComponent } from './project-details/project-details.component';

@NgModule({
  declarations: [
    AllProjectsComponent,
    EditProjectComponent,
    NewProjectComponent,
    ProjectDetailsComponent],
  imports: [MaterialModule],
  exports: [AllProjectsComponent, EditProjectComponent, NewProjectComponent, ProjectDetailsComponent],
  providers: [DatePipe]
})

export class ProjectModule { }
