import { PullRequestService } from './../../../services/pullRequest/pull-request.service';
import { PullRequest } from './../../../model/PullRequest';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-edit-pull-request',
  templateUrl: './edit-pull-request.component.html',
  styleUrls: ['./edit-pull-request.component.scss']
})
export class EditPullRequestComponent implements OnInit {
  form!: FormGroup;
  pullReq: PullRequest = {};
  loading = false;
  selected: any;
  pullReqId: any;

  constructor(  private fb: FormBuilder,
    private pullReqService: PullRequestService,
    private route: Router,
    private router: ActivatedRoute,
    private toastr: ToastrService,) { }

  ngOnInit(): void {
    this.createForm();
    this.pullReqId = this.router.snapshot.params.id;
   
    this.pullReqService.getOne(this.pullReqId).subscribe(
      res => {
        this.pullReq = res.body as PullRequest;
        this.form = this.fb.group({
          name: [this.pullReq.name]
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
    this.pullReq.name = this.form.value.name;
   
    this.pullReqService.edit(this.pullReq).subscribe(
      res => {
        this.loading = false;
        this.toastr.success('Pull request edited!');
        this.form.reset();
        this.route.navigate(['/pullReq']);
      }
    )
  }
  cancel(): void{
    this.route.navigate(['/pullReq']);
  }

}
