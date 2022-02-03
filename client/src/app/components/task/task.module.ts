import { DatePipe } from '@angular/common';
import { NgModule } from '@angular/core';
import { MatDialogModule } from '@angular/material/dialog';
import { RouterModule } from '@angular/router';
import { MaterialModule } from '../material-module';
import { AllTasksComponent } from './all-tasks/all-tasks.component';
import { EditTaskComponent } from './edit-task/edit-task.component';
import { NewTaskComponent } from './new-task/new-task.component';

@NgModule({
    declarations: [AllTasksComponent, EditTaskComponent, NewTaskComponent],
    imports: [MaterialModule, RouterModule, MatDialogModule],
    exports: [AllTasksComponent, EditTaskComponent, NewTaskComponent],
})

export class TaskModule { }