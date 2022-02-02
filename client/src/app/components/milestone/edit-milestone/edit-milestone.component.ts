import { DatePipe } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Milestone } from 'src/app/model/Milestone';
import { MilestoneService } from 'src/app/services/milestone/milestone.service';

@Component({
  selector: 'app-edit-milestone',
  templateUrl: './edit-milestone.component.html',
  styleUrls: ['./edit-milestone.component.scss']
})
export class EditMilestoneComponent implements OnInit {

  form!: FormGroup;
  milestone: Milestone = {};
  loading = false;
  stateSelected: any;
  milestoneId: any;

  constructor(
    private fb: FormBuilder,
    private milestoneService: MilestoneService,
    private route: Router,
    private router: ActivatedRoute,
    private toastr: ToastrService,
    public datepipe: DatePipe,
  ) { }

  ngOnInit(): void {
    this.createForm();
    this.milestoneId = this.router.snapshot.params.id;
   
    this.milestoneService.getOne(this.milestoneId).subscribe(
      res => {
        this.milestone = res.body as Milestone;
        console.log(this.milestone.dueDate?.toLocaleDateString);
        this.stateSelected = this.milestone.state;
        this.form = this.fb.group({
          title: [this.milestone.title],
          description: [this.milestone.description],
          dueDate: [this.datepipe.transform(this.milestone.dueDate, 'yyyy-MM-dd')],
        });
    
      }
    );
   
  }
  createForm(): void{
    this.form = this.fb.group({
      title: ['', Validators.required],
      description: ['', Validators.required],
      dueDate: ['', Validators.required],

      });
  }
  saveChanges(): void{
    this.milestone.title = this.form.value.title;
    this.milestone.state = this.stateSelected;
    this.milestone.dueDate = this.form.value.dueDate;
    this.milestone.description = this.form.value.description;
    this.milestoneService.edit(this.milestone).subscribe(
      res => {
        this.loading = false;
        this.toastr.success('Milestone edited!');
        this.form.reset();
        this.route.navigate(['/milestone']);
      }
    )
    // this.label.name = this.form.value.name;
    // console.log(this.label);
    // this.labelService.edit(this.label).subscribe(
    //   res => {
    //     this.loading = false;
    //     this.toastr.success('Label edited!');
    //     this.form.reset();
    //     this.route.navigate(['/label']);
    //   }
    // )
  }
  cancel(): void{
    this.route.navigate(['/milestone']);
  }
 
  onSelection(event: any){
    this.milestone.state = this.stateSelected;
  }

}
