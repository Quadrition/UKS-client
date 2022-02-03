import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';
import { FormGroup } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { LabelApplication } from 'src/app/model/LabelApplication';
import { LabelApplicationService } from 'src/app/services/labelApplication/labelApplication.service';
import { ConfirmationComponent, ConfirmDialogModel } from '../../shared/confirmation/confirmation.component';

@Component({
  selector: 'app-all-labelApplications',
  templateUrl: './all-labelApplications.component.html',
  styleUrls: ['./all-labelApplications.component.scss']
})
export class AllLabelApplicationsComponent implements OnInit {

  labelApplications: LabelApplication[] = [];
  result: any;
  searchForm!: FormGroup;

  constructor(
    private labelApplicationService: LabelApplicationService,
    public dialog: MatDialog,
    private router: Router,
    private toastr: ToastrService,
    private location: Location,
  ) { }

  ngOnInit(): void {
    this.labelApplicationService.getAll().subscribe(
      res => {
        this.labelApplications = res.body as LabelApplication[];
      });
  }

  edit(id: any): void {
    this.router.navigate(['/labelApplication/edit/' + id])
  }

  addNew(): void {
    this.router.navigate(['/labelApplication/new'])
  }

  delete(id: any): void {
    const message = `Are you sure you want to delete labelApplication?`
    const dialogData = new ConfirmDialogModel('Confirm Action', message);
    const dialogRef = this.dialog.open(ConfirmationComponent, {
      maxWidth: '400px',
      data: dialogData
    });

    dialogRef.afterClosed().subscribe(dialogResult => {
      this.result = dialogResult;
      if (this.result === true) {
        this.labelApplicationService.delete(id).subscribe(
          result => {
            console.log("DELETED");
            this.toastr.success('LabelApplication deleted');
            window.location.reload();
          }, error => {
            this.toastr.error('Cannot delete labelApplication');
            console.log("Error")
          });
      }
    })
  }

  cancel(): void {
    this.location.back();
  }
}
