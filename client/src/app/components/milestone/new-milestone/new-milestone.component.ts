import { DatePipe, Location } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Milestone } from 'src/app/model/Milestone';
import { Project } from 'src/app/model/Project';
import { Task } from 'src/app/model/Task';
import { MilestoneService } from 'src/app/services/milestone/milestone.service';
import { ProjectService } from 'src/app/services/project/project.service';

@Component({
  selector: 'app-new-milestone',
  templateUrl: './new-milestone.component.html',
  styleUrls: ['./new-milestone.component.scss']
})
export class NewMilestoneComponent implements OnInit {

  form!: FormGroup;
  projectId: any;
  milestone: Milestone = {};
  loading = false;
  stateSelected: any;
  project: Project = {};
  milestoneId: any;
  tasks: Task[] = [];
  constructor(
    private fb: FormBuilder,
    private milestoneService: MilestoneService,
    private projectService: ProjectService,
    private route: Router,
    private router: ActivatedRoute,
    private toastr: ToastrService,
    private location: Location,
    public datepipe: DatePipe,
  ) { }

  ngOnInit(): void {
    this.createForm();
    this.projectId = this.router.snapshot.params.projectId;
    this.projectService.getOne(this.projectId).subscribe(
      res => {
        this.project = res.body as Project;
      }
    )
  }

  createForm(): void{
    this.form = this.fb.group({
      title: ['', Validators.required],
      description: ['', Validators.required],
      dueDate: ['', Validators.required],

      });
  }
  saveChanges(): void{
    this.milestone.title = this.form.value.title;
    this.milestone.state = this.stateSelected;
    this.milestone.description = this.form.value.description;
    this.milestone.dueDate = this.form.value.dueDate;
    this.milestone.tasks = [];
    this.milestoneService.addNew(this.milestone).subscribe(
      res => {
        this.milestone = res as Milestone;
        this.loading = false;
        this.toastr.success('Milestone added!');
        this.form.reset();
        this.project.milestones?.push(this.milestone);
        this.projectService.edit(this.project).subscribe(
          res => {
            console.log("added milestone to project");
          }, error => {
            console.log("cannot add milestone to project");
          }
        )
       // this.route.navigate(['/milestone']);
       this.location.back();
      }
    )
    // this.label.name = this.form.value.name;
    // console.log(this.label);
    // this.labelService.edit(this.label).subscribe(
    //   res => {
    //     this.loading = false;
    //     this.toastr.success('Label edited!');
    //     this.form.reset();
    //     this.route.navigate(['/label']);
    //   }
    // )
  }
  cancel(): void{
    this.location.back();
  }
 
  onSelection(event: any){
    this.milestone.state = this.stateSelected;
  }

}
