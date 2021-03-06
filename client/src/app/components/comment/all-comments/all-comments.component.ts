import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';
import { FormBuilder, FormGroup } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Comment } from 'src/app/model/Comment';
import { CommentService } from 'src/app/services/comment/comment.service';
import { ConfirmationComponent, ConfirmDialogModel } from '../../shared/confirmation/confirmation.component';
import { HistoryService } from 'src/app/services/history/history.service';
import { History } from 'src/app/model/History';

@Component({
  selector: 'app-all-comments',
  templateUrl: './all-comments.component.html',
  styleUrls: ['./all-comments.component.scss']
})
export class AllCommentsComponent implements OnInit {

  comments: Comment[] = [];
  foundComment!: Comment;
  result: any;
  searchForm!: FormGroup;
  history: History[] = [];

  constructor(
    private commentService: CommentService,
    public dialog: MatDialog,
    private fb: FormBuilder,
    private router: Router,
    private toastr: ToastrService,
    private location: Location,
    private historyService: HistoryService
  ) { }

  ngOnInit(): void {
    this.commentService.getAll().subscribe(
      res => {
        this.comments = res.body as Comment[];
      });
      this.historyService.getHistory("comment").subscribe(
        res => {
          this.history = res.body as History[];
        }
      )
    this.searchForm = this.fb.group({
      id: ['']
    });
  }

  refresh(): void {
    window.location.reload();
  }

  search(): void {
    if (this.searchForm.value.id != "") {
      this.commentService.search(this.searchForm.value.id).subscribe(
        res => {
          this.foundComment = res.body as Comment;
        }
      )
    }
  }

  edit(id: any): void {
    this.router.navigate(['/comment/edit/' + id])
  }

  addNew(): void {
    this.router.navigate(['/comment/new'])
  }

  delete(id: any): void {
    const message = `Are you sure you want to delete comment?`
    const dialogData = new ConfirmDialogModel('Confirm Action', message);
    const dialogRef = this.dialog.open(ConfirmationComponent, {
      maxWidth: '400px',
      data: dialogData
    });

    dialogRef.afterClosed().subscribe(dialogResult => {
      this.result = dialogResult;
      if (this.result === true) {
        this.commentService.delete(id).subscribe(
          result => {
            console.log("DELETED");
            this.toastr.success('Comment deleted');
            window.location.reload();
          }, error => {
            this.toastr.error('Cannot delete comment');
            console.log("Error")
          });
      }
    })
  }

  cancel(): void {
    this.location.back();
  }
}
