import { DatePipe, Location } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Event } from 'src/app/model/Event';
import { EventService } from 'src/app/services/event/event.service';

@Component({
  selector: 'app-edit-event',
  templateUrl: './edit-event.component.html',
  styleUrls: ['./edit-event.component.scss']
})
export class EditEventComponent implements OnInit {

  form!: FormGroup;
  event: Event = {};
  loading = false;
  eventId: any;

  constructor(
    private fb: FormBuilder,
    private eventService: EventService,
    private router: ActivatedRoute,
    private toastr: ToastrService,
    private location: Location,
    public datepipe: DatePipe,
  ) { }

  ngOnInit(): void {
    this.createForm();
    this.eventId = this.router.snapshot.params.id;

    this.eventService.getOne(this.eventId).subscribe(
      res => {
        this.event = res.body as Event;
        this.form = this.fb.group({
          creationTime: [this.datepipe.transform(this.event.creationTime, 'yyyy-MM-dd')],
          // task: [this.event.task]
        });
      }
    );
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
    this.eventService.edit(this.event).subscribe(
      res => {
        this.loading = false;
        this.toastr.success('Event edited!');
        this.form.reset();
        this.location.back();
      }
    )
  }

  cancel(): void {
    this.location.back();
  }
}
