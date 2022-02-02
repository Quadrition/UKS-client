import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Milestone } from 'src/app/model/Milestone';
import { MilestoneService } from 'src/app/services/milestone/milestone.service';
import { ConfirmationComponent, ConfirmDialogModel } from '../../shared/confirmation/confirmation.component';

@Component({
  selector: 'app-all-milestones',
  templateUrl: './all-milestones.component.html',
  styleUrls: ['./all-milestones.component.scss']
})
export class AllMilestonesComponent implements OnInit {

  milestones: Milestone[] = [];
  result: any;
  searchForm!: FormGroup;

  constructor(
    private milestoneService: MilestoneService,
    public dialog: MatDialog,
    private fb: FormBuilder,
    private router: Router,
    private toastr: ToastrService,
  ) { }

  ngOnInit(): void {

    this.milestoneService.getAll().subscribe(
      res => {
        this.milestones = res.body as Milestone[];
       
      });
  }

  edit(id: any): void {
    this.router.navigate(['/milestone/edit/'+id])

  }
  addNew(): void {
    this.router.navigate(['/milestone/new'])

  }

  delete(id: any): void{
    const message = `Are you sure you want to delete milestone?`
    const dialogData = new ConfirmDialogModel('Confirm Action', message);
    const dialogRef = this.dialog.open(ConfirmationComponent, {
        maxWidth: '400px',
        data: dialogData
    });

    dialogRef.afterClosed().subscribe(dialogResult => {
      this.result = dialogResult;
        if (this.result === true){
          this.milestoneService.delete(id).subscribe(
            result => {
              console.log("DELETED");
              this.toastr.success('Milestone deleted');
              window.location.reload();
            }, error => {
              this.toastr.error('Cannot delete milestone');
              console.log("Error")
      
            });
          }
      })
  }

}
