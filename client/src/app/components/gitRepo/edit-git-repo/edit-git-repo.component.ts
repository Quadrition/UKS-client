import { GitRepoService } from 'src/app/services/git-repo/git-repo.service';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { GitRepo } from 'src/app/model/GitRepo';

@Component({
  selector: 'app-edit-git-repo',
  templateUrl: './edit-git-repo.component.html',
  styleUrls: ['./edit-git-repo.component.scss']
})
export class EditGitRepoComponent implements OnInit {
  form!: FormGroup;
  gitRepo: GitRepo = {};
  loading = false;
  selected: any;
  repoId: any;

  constructor(
    private fb: FormBuilder,
    private gitRepoService: GitRepoService,
    private route: Router,
    private router: ActivatedRoute,
    private toastr: ToastrService,
  ) { }

  ngOnInit(): void {
    this.createForm();
    this.repoId = this.router.snapshot.params.id;
   
    this.gitRepoService.getOne(this.repoId).subscribe(
      res => {
        this.gitRepo = res.body as GitRepo;
        this.form = this.fb.group({
          name: [this.gitRepo.name]
        });
    
      }
    );
  }

  createForm(): void{
    this.form = this.fb.group({
      name: ['', Validators.required],
      });
  }

  saveChanges(): void{
    this.gitRepo.name = this.form.value.name;
    console.log(this.gitRepo);
    console.log("id repoa za edit")
    console.log(this.gitRepo.id)
    this.gitRepoService.edit(this.gitRepo).subscribe(
      res => {
        this.loading = false;
        this.toastr.success('Repository edited!');
        this.form.reset();
        this.route.navigate(['/gitRepo']);
      }
    )
  }
  cancel(): void{
    this.route.navigate(['/gitRepo']);
  }

}
