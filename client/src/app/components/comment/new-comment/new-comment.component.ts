import { DatePipe, Location } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Comment } from 'src/app/model/Comment';
import { Task } from 'src/app/model/Task';
import { CommentService } from 'src/app/services/comment/comment.service';

@Component({
  selector: 'app-new-comment',
  templateUrl: './new-comment.component.html',
  styleUrls: ['./new-comment.component.scss']
})
export class NewCommentComponent implements OnInit {

  form!: FormGroup;
  comment: Comment = {};
  loading = false;
  commentId: any;

  constructor(
    private fb: FormBuilder,
    private commentService: CommentService,
    private toastr: ToastrService,
    private location: Location,
    public datepipe: DatePipe,
  ) { }

  ngOnInit(): void {
    this.createForm();
  }

  createForm(): void {
    this.form = this.fb.group({
      creationTime: ['', Validators.required],
      content: ['', Validators.required],
      // task: ['', Validators.required],
    });
  }

  saveChanges(): void {
    this.comment.creationTime = this.form.value.creationTime;
    this.comment.content = this.form.value.content;
    //this.comment.task = this.form.value.task;
    this.commentService.addNew(this.comment).subscribe(
      res => {
        this.loading = false;
        this.toastr.success('Comment added!');
        this.form.reset();
        this.location.back();
      }
    )
  }

  cancel(): void {
    this.location.back();
  }
}
