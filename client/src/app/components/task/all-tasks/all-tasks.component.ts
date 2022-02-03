import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Task } from 'src/app/model/Task';
import { Event } from 'src/app/model/Event';
import { Milestone } from 'src/app/model/Milestone';
import { User } from 'src/app/model/User';
import { TaskService } from 'src/app/services/task/task.service';
import { MilestoneService } from 'src/app/services/milestone/milestone.service';
import { ConfirmationComponent, ConfirmDialogModel } from '../../shared/confirmation/confirmation.component';

@Component({
  selector: 'app-all-tasks',
  templateUrl: './all-tasks.component.html',
  styleUrls: ['./all-tasks.component.scss']
})
export class AllTasksComponent implements OnInit {

  tasks: Task[] = [];
  events: Event[] = [];
  result: any;
  searchForm!: FormGroup;

  constructor(
    private fb: FormBuilder,
    private taskService: TaskService,
    private router: Router,
    private toastr: ToastrService,
    public dialog: MatDialog,
  ) { }

  ngOnInit(): void {
    this.taskService.getAll().subscribe(
      res => {
        this.tasks = res.body as Task[];
      });
  }

  edit(id: any): void {
    this.router.navigate(['/task/edit/' + id])
  }

  addNew(): void {
    this.router.navigate(['/task/new'])

  }

  delete(id: any): void {
    const message = `Are you sure you want to delete task?`
    const dialogData = new ConfirmDialogModel('Confirm Action', message);
    const dialogRef = this.dialog.open(ConfirmationComponent, {
      maxWidth: '400px',
      data: dialogData
    });

    dialogRef.afterClosed().subscribe(dialogResult => {
      this.result = dialogResult;
      if (this.result === true) {
        this.taskService.delete(id).subscribe(
          result => {
            console.log("DELETED");
            this.toastr.success('Task deleted');
            window.location.reload();
          }, error => {
            this.toastr.error('Cannot delete task');
            console.log("Error")
          });
      }
    })
  }

}
