import { DatePipe, Location } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { Event } from 'src/app/model/Event';
import { EventService } from 'src/app/services/event/event.service';

@Component({
  selector: 'app-new-event',
  templateUrl: './new-event.component.html',
  styleUrls: ['./new-event.component.scss']
})
export class NewEventComponent implements OnInit {

  form!: FormGroup;
  event: Event = {};
  loading = false;
  eventId: any;

  constructor(
    private fb: FormBuilder,
    private eventService: EventService,
    private toastr: ToastrService,
    private location: Location,
    public datepipe: DatePipe,
  ) { }

  ngOnInit(): void {
    this.createForm();
  }

  createForm(): void {
    this.form = this.fb.group({
      creationTime: ['', Validators.required],
      // task: ['', Validators.required],
    });
  }

  saveChanges(): void {
    this.event.creationTime = this.form.value.creationTime;
    //this.event.task = this.form.value.task;
    this.eventService.addNew(this.event).subscribe(
      res => {
        this.loading = false;
        this.toastr.success('Event added!');
        this.form.reset();
        this.location.back();
      }
    )
  }

  cancel(): void {
    this.location.back();
  }
}
