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
  selector: 'app-new-task',
  templateUrl: './new-task.component.html',
  styleUrls: ['./new-task.component.scss']
})
export class NewTaskComponent implements OnInit {

  form!: FormGroup;
  task: Task = {};
  milestones: Milestone[] = [];
  users: User[] = [];
  loading = false;
  selectedMilestone: any;
  selectedUser: any;

  constructor(
    private fb: FormBuilder,
    private taskService: TaskService,
    private route: Router,
    private milestoneService: MilestoneService,
    private router: ActivatedRoute,
    private toastr: ToastrService,
  ) { }

  ngOnInit(): void {
    this.milestoneService.getAll().subscribe(
      res => {
        this.milestones = res.body as Milestone[];
      });
      this.createForm();
  }
  createForm(): void {
    this.form = this.fb.group({
      
    });
  }
  saveChanges(): void {
    this.task.milestone = this.selectedMilestone;
    this.task.events = [];
    this.task.creator = 
    {
      "id": 1,
      "username": "asdf",
      "password": "$2a$10$RVzuprKddsjdq6P8QWmqF.sCj2uYPIUlbFVB.b7tJ9RdFNOOBNoXO",
      "firstName": "nestodrugo",
      "lastName": "nestodrugo"
    };
    
    console.log(this.task);
    this.taskService.addNew(this.task).subscribe(
      res => {
        this.loading = false;
        this.toastr.success('Task added!');
        this.form.reset();
        this.route.navigate(['/task']);
      }
    )
  }
  cancel(): void {
    this.route.navigate(['/task']);
  }
  onSelection(event: any): void {
    this.task.milestone = this.selectedMilestone;
    //this.task.creator = this.selectedUser;

  }

}
