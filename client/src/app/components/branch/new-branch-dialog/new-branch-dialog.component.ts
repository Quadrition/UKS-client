import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-new-branch-dialog',
  templateUrl: './new-branch-dialog.component.html',
  styleUrls: ['./new-branch-dialog.component.scss'],
})
export class NewBranchDialogComponent implements OnInit {
  constructor(
    public dialogRef: MatDialogRef<NewBranchDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: string
  ) {}

  ngOnInit(): void {}
}
