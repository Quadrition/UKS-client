import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Label } from 'src/app/model/Label';
import { LabelApplication } from 'src/app/model/LabelApplication';
import { LabelApplicationService } from 'src/app/services/labelApplication/labelApplication.service';
import { LabelService } from 'src/app/services/label/label.service';
import { Location } from '@angular/common';
import { HistoryService } from 'src/app/services/history/history.service';
import { History } from 'src/app/model/History';


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
  history: History[] = [];

  constructor(
    private fb: FormBuilder,
    private labelService: LabelService,
    private route: Router,
    private historyService: HistoryService,
    private router: ActivatedRoute,
    private location: Location,
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
    this.historyService.getHistory("label"+this.labelId).subscribe(
      res => {
        this.history = res.body as History[];
      }
    )

  }
  createForm(): void{
    this.form = this.fb.group({
      name: ['', Validators.required],
      });
  }
  saveChanges(): void{
    if(this.label.name != this.form.value.name){
      let input = "label"+this.labelId+" name changed from " + this.label.name +" to " + this.form.value.name;
      this.historyService.addNew({comment: input}).subscribe(
        res => {
          console.log("History added")
        }
      );
    }
    this.label.name = this.form.value.name;
    console.log(this.label);
    this.labelService.edit(this.label).subscribe(
      res => {
        this.loading = false;
        this.toastr.success('Label edited!');
        this.form.reset();
        this.location.back();
      }
    )
  }
  cancel(): void{
    this.location.back();
  }

}
