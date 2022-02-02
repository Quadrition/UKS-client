import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Comment } from 'src/app/model/Comment';
import { CommentService } from 'src/app/services/comment/comment.service';
import { ConfirmationComponent, ConfirmDialogModel } from '../../shared/confirmation/confirmation.component';

@Component({
  selector: 'app-all-comments',
  templateUrl: './all-comments.component.html',
  styleUrls: ['./all-comments.component.scss']
})
export class AllCommentsComponent implements OnInit {

  comments: Comment[] = [];
  result: any;
  searchForm!: FormGroup;

  constructor(
    private commentService: CommentService,
    public dialog: MatDialog,
    private fb: FormBuilder,
    private router: Router,
    private toastr: ToastrService,
  ) { }

  ngOnInit(): void {
    this.commentService.getAll().subscribe(
      res => {
        this.comments = res.body as Comment[];
      });
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
}
