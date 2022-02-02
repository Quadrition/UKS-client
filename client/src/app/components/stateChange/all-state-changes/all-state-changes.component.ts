import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { StateChange } from 'src/app/model/StateChange';
import { StateChangeService } from 'src/app/services/stateChange/stateChange.service';
import { ConfirmationComponent, ConfirmDialogModel } from '../../shared/confirmation/confirmation.component';


@Component({
  selector: 'app-all-state-changes',
  templateUrl: './all-state-changes.component.html',
  styleUrls: ['./all-state-changes.component.scss']
})
export class AllStateChangesComponent implements OnInit {

  stateChanges: StateChange[] = [];
  result: any;
  searchForm!: FormGroup;

  constructor(
    private stateChangeService: StateChangeService,
    public dialog: MatDialog,
    private fb: FormBuilder,
    private router: Router,
    private toastr: ToastrService,
  ) { }

  ngOnInit(): void {
    this.stateChangeService.getAll().subscribe(
      res => {
        this.stateChanges = res.body as StateChange[];

      });
  }

  edit(id: any): void {
    this.router.navigate(['/stateChange/edit/' + id])
  }

  delete(id: any): void {
    const message = `Are you sure you want to delete stateChange?`
    const dialogData = new ConfirmDialogModel('Confirm Action', message);
    const dialogRef = this.dialog.open(ConfirmationComponent, {
      maxWidth: '400px',
      data: dialogData
    });

    dialogRef.afterClosed().subscribe(dialogResult => {
      this.result = dialogResult;
      if (this.result === true) {
        this.stateChangeService.delete(id).subscribe(
          result => {
            console.log("DELETED");
            this.toastr.success('StateChange deleted');
            window.location.reload();
          }, error => {
            this.toastr.error('Cannot delete stateChange');
            console.log("Error")
          });
      }
    })
  }

}
