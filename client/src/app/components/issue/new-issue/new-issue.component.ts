import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Issue } from 'src/app/model/Issue';
import { IssueService } from 'src/app/services/issue/issue.service';

@Component({
  selector: 'app-new-issue',
  templateUrl: './new-issue.component.html',
  styleUrls: ['./new-issue.component.scss']
})
export class NewIssueComponent implements OnInit {
  form!: FormGroup;
  loading = false;
  issue: Issue = {};
  pullReqId: any;

  constructor(private route: Router, private fb: FormBuilder,
    private router: ActivatedRoute, 
    private issueService: IssueService, private toastr: ToastrService) { }

  ngOnInit(): void {
    
    this.createForm();
    this.pullReqId = this.router.snapshot.params.pullReqId;
    console.log("pull req id")
    console.log(this.pullReqId)
    console.log(this.router.snapshot.params)
  }

  createForm(): void{
    this.form = this.fb.group({
      title: ['', Validators.required],
      description: ['', Validators.required]
      });
  }

  cancel(): void{
    this.route.navigate(['/pullReq']);
  }

  addNewIssue(): void{
    this.issue.title = this.form.value.title;
    this.issue.description = this.form.value.description;
    
    this.issue.dateCreated = new Date()
    
    this.issueService.addNew(this.issue, this.pullReqId).subscribe(
      
      res => {
        this.loading = false;
        this.toastr.success('Issue added!');
        this.form.reset();
        this.route.navigate(['/pullReq']);
      }
    )
    console.log("pull req id u add new")
    console.log(this.pullReqId)
  }

}
