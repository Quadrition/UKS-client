import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Branch } from 'src/app/model/Branch';
import { EditBranchDialogComponent } from '../edit-branch-dialog/edit-branch-dialog.component';
import { NewBranchDialogComponent } from '../new-branch-dialog/new-branch-dialog.component';

@Component({
  selector: 'branches-list',
  templateUrl: './branches-list.component.html',
  styleUrls: ['./branches-list.component.scss'],
})
export class BranchesListComponent implements OnInit {
  constructor(public dialog: MatDialog) {
    this.branches = [{ name: 'jaja', id: 0 }];
  }
  public branches: Array<Branch>;

  openNewBranchDialog(): void {
    const dialogRef = this.dialog.open(NewBranchDialogComponent, {
      width: '250px',
      data: '',
    });

    dialogRef.afterClosed().subscribe((result) => {
      this.branches.push({ name: result, id: this.branches.length });
    });
  }

  openEditBranchDialog(branch: Branch): void {
    const dialogRef = this.dialog.open(EditBranchDialogComponent, {
      width: '250px',
      data: branch.name,
    });

    dialogRef.afterClosed().subscribe((result) => {
      const found = this.branches.find((curr) => curr.id == branch.id);
      if (found) {
        found.name = result;
      }
    });
  }

  deleteBranch(branch: Branch): void {
    this.branches = this.branches.filter((curr) => curr.id !== branch.id);
  }

  ngOnInit(): void {}
}
