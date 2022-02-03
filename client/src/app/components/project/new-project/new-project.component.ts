import { Location } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { GitRepo } from 'src/app/model/GitRepo';
import { Project } from 'src/app/model/Project';
import { GitRepoService } from 'src/app/services/git-repo/git-repo.service';
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
  repoId: any;
  repo: GitRepo = {};


  constructor(
    private fb: FormBuilder,
    private projectService: ProjectService,
    private route: Router,
    private router: ActivatedRoute,
    private repoService: GitRepoService,
    private toastr: ToastrService,
    private location: Location,
  ) { }

  ngOnInit(): void {
    this.createForm();

    this.repoId = this.router.snapshot.params.repoId;
    this.repoService.getOne(this.repoId).subscribe(
      res => {
        this.repo = res.body as GitRepo;
      }
    )
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
    this.project.gitRepo = this.repo;
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
