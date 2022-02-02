import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { DatePipe } from '@angular/common';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { StateChange } from 'src/app/model/StateChange';
import { Task } from 'src/app/model/Task';
import { StateChangeService } from 'src/app/services/stateChange/stateChange.service';
import { SortDirection } from '@angular/material/sort';

@Component({
  selector: 'app-new-state-change',
  templateUrl: './new-state-change.component.html',
  styleUrls: ['./new-state-change.component.scss']
})
export class NewStateChangeComponent implements OnInit {

  form!: FormGroup;
  stateChange: StateChange = {};
  loading = false;
  selected: any;
  stateChangeId:any;
  stateSelected: any;
  tasks: Task[] = [];

  constructor(
    private fb: FormBuilder,
    private stateChangeService: StateChangeService,
    private route: Router,
    private toastr: ToastrService,
    public datepipe: DatePipe,
  ) { }

  ngOnInit(): void {
    
    this.createForm();
  }
  createForm(): void{
    this.form = this.fb.group({
      creationTime: ['', Validators.required],
      });
  }
  saveChanges(): void{
    this.stateChange.creationTime = this.form.value.creationTime;
    //this.label.labelApplication = this.labelApplication;
    this.stateChange.task = {};
    
    console.log(this.stateChange);
    this.stateChangeService.addNew(this.stateChange).subscribe(
      res => {
        this.loading = false;
        this.toastr.success('State change added!');
        this.form.reset();
        this.route.navigate(['/stateChange']);
      }
    )
  }
  cancel(): void{
    this.route.navigate(['/stateChange']);
  }
  onSelection(event: any): void{
    this.stateChange.newState = this.stateSelected;;
    
  }

}
