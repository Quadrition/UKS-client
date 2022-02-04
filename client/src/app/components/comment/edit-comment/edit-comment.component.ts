import { DatePipe, Location } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Comment } from 'src/app/model/Comment';
import { History } from 'src/app/model/History';
import { Task } from 'src/app/model/Task';
import { CommentService } from 'src/app/services/comment/comment.service';
import { HistoryService } from 'src/app/services/history/history.service';
import { TaskService } from 'src/app/services/task/task.service';

@Component({
  selector: 'app-edit-comment',
  templateUrl: './edit-comment.component.html',
  styleUrls: ['./edit-comment.component.scss']
})
export class EditCommentComponent implements OnInit {

  form!: FormGroup;
  comment: Comment = {};
  task!: Task;
  tasks: Task[] = [];
  selectedTask: any;
  loading = false;
  commentId: any;

  constructor(
    private fb: FormBuilder,
    private commentService: CommentService,
    private taskService: TaskService,
    private router: ActivatedRoute,
    private toastr: ToastrService,
    private location: Location,
    public datepipe: DatePipe,
    private historyService: HistoryService,
  ) { }

  ngOnInit(): void {
    this.taskService.getAll().subscribe(
      res => {
        this.tasks = res.body as Task[];
      });
    this.createForm();
    this.commentId = this.router.snapshot.params.id;

    this.commentService.getOne(this.commentId).subscribe(
      res => {
        this.comment = res.body as Comment;
        this.form = this.fb.group({
          creationTime: [this.datepipe.transform(this.comment.creationTime, 'yyyy-MM-dd')],
          content: [this.comment.content],
          task: [this.comment.task]
        });
        this.selectedTask = this.comment.task;
      }
    );

  }

  createForm(): void {
    this.form = this.fb.group({
      creationTime: ['', Validators.required],
      content: ['', Validators.required],
      task: ['', Validators.required],
    });
  }

  saveChanges(): void {
    if (this.comment.content != this.form.value.content) {
      let input = "comment" + this.commentId + " changed content from " + this.comment.content + " to " + this.form.value.content;
      this.historyService.addNew({ comment: input }).subscribe(
        res => {
          console.log("History added");
        }
      )
    }
    this.comment.creationTime = this.form.value.creationTime;
    this.comment.content = this.form.value.content;
    if (this.task === undefined) {
      this.task = this.form.value.task;
    }
    if (this.task != this.comment.task) {
      let input = "comment" + this.commentId + " changed task from " + this.comment.task?.id + " to " + this.task.id;
      this.historyService.addNew({ comment: input }).subscribe(
        res => {
          console.log("History added");
        }
      )
    }
    this.comment.task = this.task;

    this.commentService.edit(this.comment).subscribe(
      res => {
        this.loading = false;
        this.toastr.success('Comment edited!');
        this.form.reset();
        this.location.back();
      }
    )
  }

  onSelection(event: any): void {
    this.task = this.selectedTask;
  }

  cancel(): void {
    this.location.back();
  }
}
