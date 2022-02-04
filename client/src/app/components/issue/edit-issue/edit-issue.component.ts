import { IssueService } from './../../../services/issue/issue.service';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Issue } from 'src/app/model/Issue';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { DatePipe } from '@angular/common';

@Component({
  selector: 'app-edit-issue',
  templateUrl: './edit-issue.component.html',
  styleUrls: ['./edit-issue.component.scss']
})
export class EditIssueComponent implements OnInit {
  form!: FormGroup;
  issue: Issue = {};
  loading = false;
  selected: any;
  issueId: any;
  dateCreated : any;
  pipe: any;

  constructor(private fb: FormBuilder,
    private issueService: IssueService,
    private route: Router,
    private router: ActivatedRoute,
    private toastr: ToastrService,
    public datepipe: DatePipe) { }

  ngOnInit(): void {
    this.createForm();
    this.issueId = this.router.snapshot.params.id;
    
   
    this.issueService.getOne(this.issueId).subscribe(
      res => {
        this.issue = res.body as Issue;
        this.pipe = new DatePipe('en-US');
        
        this.form = this.fb.group({
          title: [this.issue.title],
          description: [this.issue.description],
          date: [this.datepipe.transform(this.issue.dateCreated, 'yyyy-MM-dd')]
        });
    
      }
    );
  }


  createForm(): void{
    this.form = this.fb.group({
      title: ['', Validators.required],
      description: ['', Validators.required],
       date: ['', Validators.required]
      });
  }

  saveChanges(): void{
    this.issue.title = this.form.value.title;
    console.log(this.issue);
    console.log("id issuea za edit")
    console.log(this.issue.id)
    this.issueService.edit(this.issue).subscribe(
      res => {
        this.loading = false;
        this.toastr.success('Issue edited!');
        this.form.reset();
        this.route.navigate(['/pullReq']);
      }
    )
  }
  cancel(): void{
    this.route.navigate(['/pullReq']);
  }

}
