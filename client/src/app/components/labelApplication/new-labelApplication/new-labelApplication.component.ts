import { DatePipe, Location } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { LabelApplicationService } from 'src/app/services/labelApplication/labelApplication.service';

@Component({
  selector: 'app-new-labelApplication',
  templateUrl: './new-labelApplication.component.html',
  styleUrls: ['./new-labelApplication.component.scss']
})
export class NewLabelApplicationComponent implements OnInit {

  form!: FormGroup;
  labelApplication: LabelApplication = {};
  loading = false;
  labelApplicationId: any;

  constructor(
    private fb: FormBuilder,
    private labelApplicationService: LabelApplicationService,
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
    this.labelApplication.creationTime = this.form.value.creationTime;
    //this.labelApplication.task = this.form.value.task;
    this.labelApplicationService.addNew(this.labelApplication).subscribe(
      res => {
        this.loading = false;
        this.toastr.success('LabelApplication added!');
        this.form.reset();
        this.location.back();
      }
    )
  }

  cancel(): void {
    this.location.back();
  }
}
