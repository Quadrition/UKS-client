import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Event } from 'src/app/model/Event';
import { EventService } from 'src/app/services/event/event.service';
import { ConfirmationComponent, ConfirmDialogModel } from '../../shared/confirmation/confirmation.component';

@Component({
  selector: 'app-all-events',
  templateUrl: './all-events.component.html',
  styleUrls: ['./all-events.component.scss']
})
export class AllEventsComponent implements OnInit {

  events: Event[] = [];
  foundEvent!: Event;
  result: any;
  searchForm!: FormGroup;

  constructor(
    private eventService: EventService,
    public dialog: MatDialog,
    private fb: FormBuilder,
    private router: Router,
    private toastr: ToastrService,
  ) { }

  ngOnInit(): void {
    this.eventService.getAll().subscribe(
      res => {
        this.events = res.body as Event[];
      });

    this.searchForm = this.fb.group({
      id: ['']
    });
  }

  refresh(): void {
    window.location.reload();
  }

  search(): void {
    if (this.searchForm.value.id != "") {
      this.eventService.search(this.searchForm.value.id).subscribe(
        res => {
          this.foundEvent = res.body as Event;
        }
      )
    }
  }

  goToComments(): void {
    this.router.navigate(['/comment'])
  }

  goToLabelApplications(): void {
    this.router.navigate(['/labelApplication'])
  }

  goToStateChanges(): void {
    this.router.navigate(['/stateChange'])
  }

  edit(id: any): void {
    this.router.navigate(['/event/edit/' + id])
  }

  addNew(): void {
    this.router.navigate(['/event/new'])
  }

  delete(id: any): void {
    const message = `Are you sure you want to delete event?`
    const dialogData = new ConfirmDialogModel('Confirm Action', message);
    const dialogRef = this.dialog.open(ConfirmationComponent, {
      maxWidth: '400px',
      data: dialogData
    });

    dialogRef.afterClosed().subscribe(dialogResult => {
      this.result = dialogResult;
      if (this.result === true) {
        this.eventService.delete(id).subscribe(
          result => {
            console.log("DELETED");
            this.toastr.success('Event deleted');
            window.location.reload();
          }, error => {
            this.toastr.error('Cannot delete event');
            console.log("Error")
          });
      }
    })
  }
}
