import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { StateChange } from 'src/app/model/StateChange';
import { StateChangeService } from 'src/app/services/stateChange/stateChange.service';

@Component({
  selector: 'app-edit-state-change',
  templateUrl: './edit-state-change.component.html',
  styleUrls: ['./edit-state-change.component.scss']
})
export class EditStateChangeComponent implements OnInit {

  form!: FormGroup;
  stateChange: StateChange = {};
  loading = false;
  stateSelected: any;
  stateChangeId: any;

  constructor(
    private fb: FormBuilder,
    private stateChangeService: StateChangeService,
    private route: Router,
    private router: ActivatedRoute,
    private toastr: ToastrService,
  ) { }

  ngOnInit(): void {
    this.createForm();
    this.stateChangeId = this.router.snapshot.params.id;

    this.stateChangeService.getOne(this.stateChangeId).subscribe(
      res => {
        this.stateChange = res.body as StateChange;
        this.stateSelected = this.stateChange.newState;
        this.form = this.fb.group({
          newState: [this.stateChange.newState]
        });

      }
    );
  }

  createForm(): void {
    this.form = this.fb.group({
      
    });
  }
  saveChanges(): void {
    this.stateChange.newState = this.stateSelected;
    console.log(this.stateChange);
    this.stateChangeService.edit(this.stateChange).subscribe(
      res => {
        this.loading = false;
        this.toastr.success('State change edited!');
        this.form.reset();
        this.route.navigate(['/stateChange']);
      }
    )
  }
  cancel(): void {
    this.route.navigate(['/stateChange']);
  }
  
  onSelection(event: any){
    this.stateChange.newState = this.stateSelected;
  }

}
