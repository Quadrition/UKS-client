import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ToastrService } from 'ngx-toastr';
import { Branch } from 'src/app/model/Branch';
import { BranchService } from 'src/app/services/branch/branch.service';
import { EditBranchDialogComponent } from '../edit-branch-dialog/edit-branch-dialog.component';
import { NewBranchDialogComponent } from '../new-branch-dialog/new-branch-dialog.component';

@Component({
  selector: 'branches-list',
  templateUrl: './branches-list.component.html',
  styleUrls: ['./branches-list.component.scss'],
})
export class BranchesListComponent implements OnInit {
  constructor(
    public dialog: MatDialog,
    public branchService: BranchService,
    private toastr: ToastrService
  ) {
    this.branches = [];
  }
  public branches: Array<Branch>;

  openNewBranchDialog(): void {
    const dialogRef = this.dialog.open(NewBranchDialogComponent, {
      width: '250px',
      data: '',
    });

    dialogRef.afterClosed().subscribe((result) => {
      const branch = { name: result };

      this.branchService.addNew(branch).subscribe((res) => {
        console.log(res);
        this.toastr.success('Branch added!');
        this.branches.push({ name: res.name, id: res.id });
      });
    });
  }

  openEditBranchDialog(branch: Branch): void {
    const dialogRef = this.dialog.open(EditBranchDialogComponent, {
      width: '250px',
      data: branch.name,
    });

    dialogRef.afterClosed().subscribe((result) => {
      console.log(result);
      this.branchService.edit(branch.id, result).subscribe((res) => {
        console.log(res);
        const found = this.branches.find((curr) => curr.id == branch.id);
        if (found) {
          found.name = res.name;
        }
      });
    });
  }

  deleteBranch(branch: Branch): void {
    this.branchService.delete(branch.id).subscribe((res) => {
      console.log(res);
      this.branches = this.branches.filter((curr) => curr.id !== branch.id);
    });
  }

  ngOnInit(): void {
    this.branchService.getAll().subscribe((res) => {
      console.log(res);
      this.branches = res.body;
    });
  }
}
