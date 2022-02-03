import { DatePipe, Location } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { Task } from 'src/app/model/Task';
import { LabelApplication } from 'src/app/model/LabelApplication';
import { LabelApplicationService } from 'src/app/services/labelApplication/labelApplication.service';
import { TaskService } from 'src/app/services/task/task.service';

@Component({
  selector: 'app-new-labelApplication',
  templateUrl: './new-labelApplication.component.html',
  styleUrls: ['./new-labelApplication.component.scss']
})
export class NewLabelApplicationComponent implements OnInit {

  form!: FormGroup;
  labelApplication: LabelApplication = {};
  task!: Task;
  tasks: Task[] = [];
  selectedTask: any;
  loading = false;
  labelApplicationId: any;

  constructor(
    private fb: FormBuilder,
    private labelApplicationService: LabelApplicationService,
    private taskService: TaskService,
    private toastr: ToastrService,
    private location: Location,
    public datepipe: DatePipe,
  ) { }

  ngOnInit(): void {
    this.taskService.getAll().subscribe(
      res => {
        this.tasks = res.body as Task[];
      });
    this.createForm();
  }

  createForm(): void {
    this.form = this.fb.group({
      creationTime: ['', Validators.required],
      task: ['', Validators.required]
    });
  }

  saveChanges(): void {
    this.labelApplication.creationTime = this.form.value.creationTime;
    this.labelApplication.task = this.task;
    this.labelApplicationService.addNew(this.labelApplication).subscribe(
      res => {
        this.loading = false;
        this.toastr.success('Label Application added!');
        this.form.reset();
        this.location.back();
      }
    )
  }

  onSelection(event: any): void {
    this.task = this.selectedTask;
  }

  cancel(): void {
    this.location.back();
  }
}
