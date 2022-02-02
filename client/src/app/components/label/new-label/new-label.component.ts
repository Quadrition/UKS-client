import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Label } from 'src/app/model/Label';
import { LabelApplication } from 'src/app/model/LabelApplication';
import { LabelApplicationService } from 'src/app/services/label-application/label-application.service';
import { LabelService } from 'src/app/services/label/label.service';

@Component({
  selector: 'app-new-label',
  templateUrl: './new-label.component.html',
  styleUrls: ['./new-label.component.scss']
})
export class NewLabelComponent implements OnInit {

  form!: FormGroup;
  label: Label = {};
  loading = false;
  labelApplication!: LabelApplication;
  applications: LabelApplication[] = [];
  selected: any;

  constructor(
    private fb: FormBuilder,
    private labelService: LabelService,
    private labelApplicationService: LabelApplicationService,
    private route: Router,
    private toastr: ToastrService,
  ) { }

  ngOnInit(): void {
    this.labelApplicationService.getAll().subscribe(
      res => {
        this.applications = res.body as LabelApplication[]
      }
    );
    this.createForm();
  }
  createForm(): void{
    this.form = this.fb.group({
      name: ['', Validators.required],
      });
  }
  saveChanges(): void{
    this.label.name = this.form.value.name;
    this.label.labelApplication = this.labelApplication;
    
    console.log(this.label);
    this.labelService.addNew(this.label).subscribe(
      res => {
        this.loading = false;
        this.toastr.success('Label added!');
        this.form.reset();
        this.route.navigate(['/label']);
      }
    )
  }
  cancel(): void{
    this.route.navigate(['/label']);
  }
  onSelection(event: any): void{
    this.labelApplication = this.selected;
    
  }
}
