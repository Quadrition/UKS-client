import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Label } from 'src/app/model/Label';
import { LabelApplication } from 'src/app/model/LabelApplication';
import { LabelApplicationService } from 'src/app/services/label-application/label-application.service';
import { LabelService } from 'src/app/services/label/label.service';

@Component({
  selector: 'app-edit-label',
  templateUrl: './edit-label.component.html',
  styleUrls: ['./edit-label.component.scss']
})
export class EditLabelComponent implements OnInit {

  form!: FormGroup;
  label: Label = {};
  loading = false;
  selected: any;
  labelId: any;

  constructor(
    private fb: FormBuilder,
    private labelService: LabelService,
    private route: Router,
    private router: ActivatedRoute,
    private toastr: ToastrService,
  ) { }

  ngOnInit(): void {
    this.createForm();
    this.labelId = this.router.snapshot.params.id;
   
    this.labelService.getOne(this.labelId).subscribe(
      res => {
        this.label = res.body as Label;
        this.form = this.fb.group({
          name: [this.label.name]
        });
    
      }
    );
   
  }
  createForm(): void{
    this.form = this.fb.group({
      name: ['', Validators.required],
      });
  }
  saveChanges(): void{
    this.label.name = this.form.value.name;
    console.log(this.label);
    this.labelService.edit(this.label).subscribe(
      res => {
        this.loading = false;
        this.toastr.success('Label edited!');
        this.form.reset();
        this.route.navigate(['/label']);
      }
    )
  }
  cancel(): void{
    this.route.navigate(['/label']);
  }
 
}
