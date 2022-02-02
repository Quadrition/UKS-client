import { GitRepo } from 'src/app/model/GitRepo';
import { Component, OnInit } from '@angular/core';
import { GitRepoService } from 'src/app/services/git-repo/git-repo.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-all-git-repos',
  templateUrl: './all-git-repos.component.html',
  styleUrls: ['./all-git-repos.component.scss']
})
export class AllGitReposComponent implements OnInit {

  constructor(
    private gitRepoService : GitRepoService,
    private router: Router) { 
    
  }

  ngOnInit(): void {
    this.gitRepoService.getAll().subscribe(
      res => {
        this.repos = res.body as GitRepo[];
       
      });
      console.log(this.repos)
  
  }

  edit(id: any): void {
    this.router.navigate(['/gitRepo/edit/'+id])

  }

  repos: GitRepo[] = [];
  result: any;

}
