import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Label } from 'src/app/model/Label';
import { LabelApplication } from 'src/app/model/LabelApplication';
import { LabelApplicationService } from 'src/app/services/labelApplication/labelApplication.service';
import { LabelService } from 'src/app/services/label/label.service';
import { Location } from '@angular/common';
import { Project } from 'src/app/model/Project';
import { ProjectService } from 'src/app/services/project/project.service';


@Component({
  selector: 'app-new-label',
  templateUrl: './new-label.component.html',
  styleUrls: ['./new-label.component.scss']
})
export class NewLabelComponent implements OnInit {

  form!: FormGroup;
  label: Label = {};
  loading = false;
  labelApplication!: LabelApplication;
  applications: LabelApplication[] = [];
  selected: any;
  projectId: any;
  project: Project = {};


  constructor(
    private fb: FormBuilder,
    private labelService: LabelService,
    private labelApplicationService: LabelApplicationService,
    private projectService: ProjectService,
    private route: Router,
    private router: ActivatedRoute,
    private toastr: ToastrService,
    private location: Location,
  ) { }

  ngOnInit(): void {
    this.projectId = this.router.snapshot.params.projectId;
    this.projectService.getOne(this.projectId).subscribe(
      res => {
        this.project = res.body as Project;
      }
    )
    this.labelApplicationService.getAll().subscribe(
      res => {
        this.applications = res.body as LabelApplication[]
      }
    );
    this.createForm();
  }
  createForm(): void{
    this.form = this.fb.group({
      name: ['', Validators.required],
      });
  }
  saveChanges(): void{
    this.label.name = this.form.value.name;
    this.label.labelApplication = this.labelApplication;

    console.log(this.label);
    this.labelService.addNew(this.label).subscribe(
      res => {
        this.label = res as Label;
        this.project.labesls?.push(this.label);
        this.projectService.edit(this.project).subscribe(
          res => {
            console.log("added label to project");
          }, error => {
            console.log("cannot add label to project");
          }
        )
        this.loading = false;
        this.toastr.success('Label added!');
        this.form.reset();
        //this.route.navigate(['/label']);
        this.location.back();
      }
    )
  }
  cancel(): void{
   // this.route.navigate(['/label']);
   this.location.back();
  }
  onSelection(event: any): void{
    this.labelApplication = this.selected;

  }
}
