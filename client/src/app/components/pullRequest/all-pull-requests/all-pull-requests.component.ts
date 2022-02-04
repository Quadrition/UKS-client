import { PullRequestService } from './../../../services/pullRequest/pull-request.service';
import { PullRequest } from './../../../model/PullRequest';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-all-pull-requests',
  templateUrl: './all-pull-requests.component.html',
  styleUrls: ['./all-pull-requests.component.scss']
})
export class AllPullRequestsComponent implements OnInit {

  constructor(private pullReqService : PullRequestService,private router: Router) { }

  ngOnInit(): void {
    this.pullReqService.getAll().subscribe(
      res => {
        this.pullReqs = res.body as PullRequest[];
       
      });
  }

  panelOpenState = false;

  edit(id: any){
    this.router.navigate(['/pullReq/edit/'+id])
  }

  addNewIssue(id: any){
    console.log("iz pull req componente")
    console.log(id)
    this.router.navigate(['/issue/new/'+id])
  }

  
  goToIssue(id:any){
    this.router.navigate(['/issue/edit/'+id])
  }
  reqs = [ "Item 1", "Item 2", "Item 3", "Item 4"];
  pullReqs: PullRequest[] = [];
}
