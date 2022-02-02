import { DatePipe } from '@angular/common';
import { NgModule } from '@angular/core';
import { MaterialModule } from '../material-module';
import { AllCommentsComponent } from './all-comments/all-comments.component';
import { EditCommentComponent } from './edit-comment/edit-comment.component';
import { NewCommentComponent } from './new-comment/new-comment.component';

@NgModule({
  declarations: [
    AllCommentsComponent,
    EditCommentComponent,
    NewCommentComponent
  ],
  imports: [MaterialModule],
  exports: [
    AllCommentsComponent,
    EditCommentComponent,
    NewCommentComponent
  ],
  providers: [DatePipe]
})

export class CommentModule { }
