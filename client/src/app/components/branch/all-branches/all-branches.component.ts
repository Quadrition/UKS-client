import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { Branch } from 'src/app/model/Branch';
import { BranchService } from 'src/app/services/branch/branch.service';
import {
  ConfirmationComponent,
  ConfirmDialogModel,
} from '../../shared/confirmation/confirmation.component';

@Component({
  selector: 'app-all-branches',
  templateUrl: './all-branches.component.html',
  styleUrls: ['./all-branches.component.scss'],
})
export class AllBranchesComponent implements OnInit {
  branches: Branch[] = [];
  result: any;
  searchForm!: FormGroup;

  constructor(
    private branchService: BranchService,
    public dialog: MatDialog,
    private fb: FormBuilder,
    private router: Router,
    private toastr: ToastrService
  ) {}

  ngOnInit(): void {
    this.branchService.getAll().subscribe((res) => {
      this.branches = res.body as Branch[];
    });
  }

  addNew(): void {
    this.router.navigate(['/branch/new']);
  }

  delete(id: any): void {
    const message = `Are you sure you want to delete branch?`;
    const dialogData = new ConfirmDialogModel('Confirm Action', message);
    const dialogRef = this.dialog.open(ConfirmationComponent, {
      maxWidth: '400px',
      data: dialogData,
    });

    dialogRef.afterClosed().subscribe((dialogResult) => {
      this.result = dialogResult;
      if (this.result === true) {
        this.branchService.delete(id).subscribe(
          (result) => {
            console.log('DELETED');
            this.toastr.success('Branch deleted');
            window.location.reload();
          },
          (error) => {
            this.toastr.error('Cannot delete branch');
            console.log('Error');
          }
        );
      }
    });
  }
}
