import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Task } from 'src/app/model/Task';
import { Event } from 'src/app/model/Event';
import { Milestone } from 'src/app/model/Milestone';
import { User } from 'src/app/model/User';
import { TaskService } from 'src/app/services/task/task.service';
import { MilestoneService } from 'src/app/services/milestone/milestone.service';
import { ConfirmationComponent, ConfirmDialogModel } from '../../shared/confirmation/confirmation.component';


@Component({
  selector: 'app-edit-task',
  templateUrl: './edit-task.component.html',
  styleUrls: ['./edit-task.component.scss']
})
export class EditTaskComponent implements OnInit {

  form!: FormGroup;
  task: Task = {};
  milestones: Milestone[] = [];
  loading = false;
  selected: any;
  taskId: any;

  constructor(
    private fb: FormBuilder,
    private taskService: TaskService,
    private route: Router,
    private milestoneService: MilestoneService,
    private router: ActivatedRoute,
    private toastr: ToastrService,
  ) { }

  ngOnInit(): void {
    this.createForm();
    this.taskId = this.router.snapshot.params.id;
    /* this.milestoneService.getAll().subscribe(
       res => {
         this.milestones = res.body as Milestone[];
       });
     
     this.taskService.getOne(this.taskId).subscribe(
       res => {
         this.task = res.body as Task;
         this.form = this.fb.group({
 
         });
 
       }
     );*/


    this.createForm();
    this.taskId = this.router.snapshot.params.id;

    this.milestoneService.getAll().subscribe(
      res => {
        this.milestones = res.body as Milestone[];
      });

    this.taskService.getOne(this.taskId).subscribe(
      res => {
        this.task = res.body as Task;
        this.selected = this.task.milestone;
        this.form = this.fb.group({

        });

      });
  }

  createForm(): void {
    this.form = this.fb.group({
      
    });
  }
  saveChanges(): void {
    this.task.milestone = this.selected;
    this.task.events = [];
    
    console.log(this.task.milestone);
    this.taskService.edit(this.task).subscribe(
      res => {
        this.loading = false;
        this.toastr.success('Task edited!');
        this.form.reset();
        this.route.navigate(['/task']);
      }
    )
  }
  cancel(): void {
    this.route.navigate(['/task']);
  }

  onSelection(event: any) {
    this.task.milestone = this.selected;
  }

}
