import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-edit-branch-dialog',
  templateUrl: './edit-branch-dialog.component.html',
  styleUrls: ['./edit-branch-dialog.component.scss'],
})
export class EditBranchDialogComponent implements OnInit {
  constructor(
    public dialogRef: MatDialogRef<EditBranchDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: string
  ) {}

  ngOnInit(): void {}
}
