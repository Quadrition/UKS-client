import { Location } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Project } from 'src/app/model/Project';
import { ProjectService } from 'src/app/services/project/project.service';

@Component({
  selector: 'app-new-project',
  templateUrl: './new-project.component.html',
  styleUrls: ['./new-project.component.scss']
})
export class NewProjectComponent implements OnInit {

  form!: FormGroup;
  
  loading = false;
  selected: any;
  project: Project = {};


  constructor(
    private fb: FormBuilder,
    private projectService: ProjectService,
    private route: Router,
    private router: ActivatedRoute,
    private toastr: ToastrService,
    private location: Location,
  ) { }

  ngOnInit(): void {
    this.createForm();
  }
  createForm(): void{
    this.form = this.fb.group({
      title: ['', Validators.required],
      });
  }
  saveChanges(): void{
    this.project.developers = [];
    this.project.labesls = [];
    this.project.milestones = [];
    this.project.gitRepo = {};
    this.project.leader = {};
    this.project.title = this.form.value.title;
    
    this.projectService.addNew(this.project).subscribe(
      res => {
        this.toastr.success("Project created");
      }, error => {
        this.toastr.error("Cannot create project");
      }
    )
    this.location.back();
  }
  cancel(): void{
   this.location.back();
  }
  

}
