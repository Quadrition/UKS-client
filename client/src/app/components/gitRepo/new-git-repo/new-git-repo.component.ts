import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { GitRepo } from 'src/app/model/GitRepo';
import { GitRepoService } from 'src/app/services/git-repo/git-repo.service';
import { GitRepoModule } from '../git-repo.module';

@Component({
  selector: 'app-new-git-repo',
  templateUrl: './new-git-repo.component.html',
  styleUrls: ['./new-git-repo.component.scss']
})
export class NewGitRepoComponent implements OnInit {
  form!: FormGroup;
  loading = false;
  repo: GitRepo = {};

  constructor(private route: Router, private fb: FormBuilder,private gitRepoService: GitRepoService,private toastr: ToastrService) { }

  ngOnInit(): void {
    this.createForm();
  }

  createForm(): void{
    this.form = this.fb.group({
      name: ['', Validators.required],
      });
  }

  addNewRepo(): void{
    this.repo.name = this.form.value.name;
    
    
    console.log(this.repo);
    this.gitRepoService.addNew(this.repo).subscribe(
      res => {
        this.loading = false;
        this.toastr.success('Repository added!');
        this.form.reset();
        this.route.navigate(['/gitRepo']);
      }
    )
  }

  cancel(): void{
    this.route.navigate(['/gitRepo']);
  }
}
