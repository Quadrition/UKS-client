import { DatePipe, Location } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Comment } from 'src/app/model/Comment';
import { CommentService } from 'src/app/services/comment/comment.service';

@Component({
  selector: 'app-edit-comment',
  templateUrl: './edit-comment.component.html',
  styleUrls: ['./edit-comment.component.scss']
})
export class EditCommentComponent implements OnInit {

  form!: FormGroup;
  comment: Comment = {};
  loading = false;
  commentId: any;

  constructor(
    private fb: FormBuilder,
    private commentService: CommentService,
    private router: ActivatedRoute,
    private toastr: ToastrService,
    private location: Location,
    public datepipe: DatePipe,
  ) { }

  ngOnInit(): void {
    this.createForm();
    this.commentId = this.router.snapshot.params.id;

    this.commentService.getOne(this.commentId).subscribe(
      res => {
        this.comment = res.body as Comment;
        this.form = this.fb.group({
          creationTime: [this.datepipe.transform(this.comment.creationTime, 'yyyy-MM-dd')],
          content: [this.comment.content],
          // task: [this.comment.task]
        });
      }
    );
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
    this.commentService.edit(this.comment).subscribe(
      res => {
        this.loading = false;
        this.toastr.success('Comment edited!');
        this.form.reset();
        this.location.back();
      }
    )
  }

  cancel(): void {
    this.location.back();
  }
}
