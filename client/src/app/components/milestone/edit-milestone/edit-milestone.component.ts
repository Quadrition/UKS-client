import { DatePipe, Location } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { History } from 'src/app/model/History';
import { Milestone } from 'src/app/model/Milestone';
import { HistoryService } from 'src/app/services/history/history.service';
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
  history: History[] = [];

  constructor(
    private fb: FormBuilder,
    private milestoneService: MilestoneService,
    private route: Router,
    private historyService: HistoryService,
    private router: ActivatedRoute,
    private toastr: ToastrService,
    private location: Location,
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
    this.historyService.getHistory("milestone"+this.milestoneId).subscribe(
      res => {
        this.history = res.body as History[];
      }
    )
   
  }
  createForm(): void{
    this.form = this.fb.group({
      title: ['', Validators.required],
      description: ['', Validators.required],
      dueDate: ['', Validators.required],

      });
  }
  saveChanges(): void{
    if( this.milestone.title != this.form.value.title){
      let input = "milestone"+this.milestoneId+" title change from "
      +this.milestone.title+" to " + this.form.value.title;
      this.historyService.addNew({comment: input}).subscribe(
        res =>{
          console.log("history");
        }
      )
    }
    if( this.milestone.state != this.stateSelected){
      console.log(this.milestone.state);
      let input = "milestone"+this.milestoneId+" state change from "
      +this.milestone.state+" to " + this.stateSelected;
      this.historyService.addNew({comment: input}).subscribe(
        res =>{
          console.log("history");
        }
      )
    }
    if(this.datepipe.transform(this.milestone.dueDate, 'yyyy-MM-dd') != this.form.value.dueDate){
      let input = "milestone"+this.milestoneId+" due Date change from "
      +this.datepipe.transform(this.milestone.dueDate, 'yyyy-MM-dd')+" to " + this.datepipe.transform(this.form.value.dueDate, 'yyyy-MM-dd');
      this.historyService.addNew({comment: input}).subscribe(
        res =>{
          console.log("history");
        }
      )
    }
    if( this.milestone.description != this.form.value.description){
      let input = "milestone"+this.milestoneId+" description change from "
      +this.milestone.description+" to " + this.form.value.description;
      this.historyService.addNew({comment: input}).subscribe(
        res =>{
          console.log("history");
        }
      )
    }
    this.milestone.title = this.form.value.title;
    this.milestone.state = this.stateSelected;
    this.milestone.dueDate = this.form.value.dueDate;
    this.milestone.description = this.form.value.description;
    this.milestoneService.edit(this.milestone).subscribe(
      res => {

        this.loading = false;
        this.toastr.success('Milestone edited!');
        this.form.reset();
        this.location.back();
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
    this.location.back();
  }
 
  onSelection(event: any){
    //this.milestone.state = this.stateSelected;
  }

}
