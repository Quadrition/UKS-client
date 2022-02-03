import { DatePipe, Location } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { LabelApplication } from 'src/app/model/LabelApplication';
import { LabelApplicationService } from 'src/app/services/labelApplication/labelApplication.service';

@Component({
  selector: 'app-edit-labelApplication',
  templateUrl: './edit-labelApplication.component.html',
  styleUrls: ['./edit-labelApplication.component.scss']
})
export class EditLabelApplicationComponent implements OnInit {

  form!: FormGroup;
  labelApplication: LabelApplication = {};
  loading = false;
  labelApplicationId: any;

  constructor(
    private fb: FormBuilder,
    private labelApplicationService: LabelApplicationService,
    private router: ActivatedRoute,
    private toastr: ToastrService,
    private location: Location,
    public datepipe: DatePipe,
  ) { }

  ngOnInit(): void {
    this.createForm();
    this.labelApplicationId = this.router.snapshot.params.id;

    this.labelApplicationService.getOne(this.labelApplicationId).subscribe(
      res => {
        this.labelApplication = res.body as LabelApplication;
        this.form = this.fb.group({
          creationTime: [this.datepipe.transform(this.labelApplication.creationTime, 'yyyy-MM-dd')],
          // task: [this.labelApplication.task]
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
    this.labelApplication.creationTime = this.form.value.creationTime;
    //this.labelApplication.task = this.form.value.task;
    this.labelApplicationService.edit(this.labelApplication).subscribe(
      res => {
        this.loading = false;
        this.toastr.success('LabelApplication edited!');
        this.form.reset();
        this.location.back();
      }
    )
  }

  cancel(): void {
    this.location.back();
  }
}
