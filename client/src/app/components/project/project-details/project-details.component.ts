import { DatePipe } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Project } from 'src/app/model/Project';
import { MilestoneService } from 'src/app/services/milestone/milestone.service';
import { ProjectService } from 'src/app/services/project/project.service';
import { ConfirmationComponent, ConfirmDialogModel } from '../../shared/confirmation/confirmation.component';
import { LabelService } from 'src/app/services/label/label.service';


@Component({
  selector: 'app-project-details',
  templateUrl: './project-details.component.html',
  styleUrls: ['./project-details.component.scss']
})
export class ProjectDetailsComponent implements OnInit {

  form!: FormGroup;
  project: Project = {};
  result: any;
  projectId: any;
  loading = false;
  projectName: any;

  constructor(
    private fb: FormBuilder,
    private projectService: ProjectService,
    private milestoneService: MilestoneService,
    private labelService: LabelService,
    private route: Router,
    public dialog: MatDialog,
    private router: ActivatedRoute,
    private toastr: ToastrService,
    public datepipe: DatePipe,
  ) { }

  ngOnInit(): void {

    this.projectId = this.router.snapshot.params.id;
    this.projectService.getOne(this.projectId).subscribe(
      res => {
        this.project = res.body as Project;
        this.projectName = this.project.title;
        console.log(this.project);
      }
    )
  }

  cancel(){
    this.projectName = this.project.title;
  }

  saveChanges(){
      this.project.title = this.projectName;
      this.projectService.edit(this.project).subscribe(
        res => {
          this.toastr.success("Project title changed!");
        },
        error => {
          this.toastr.error("Cannot change project title");
        }
      )
  }

  deleteProject(){

    const message = `Are you sure you want to delete project?`
    const dialogData = new ConfirmDialogModel('Confirm Action', message);
    const dialogRef = this.dialog.open(ConfirmationComponent, {

        maxWidth: '400px',
        data: dialogData
    });

    dialogRef.afterClosed().subscribe(dialogResult => {
      this.result = dialogResult;
        if (this.result === true){
          this.projectService.delete(this.projectId).subscribe(
            result => {
              console.log("DELETED");
              this.toastr.success('Project deleted');
              this.route.navigate(['/project']);
            }, error => {
              this.toastr.error('Cannot delete project');
              console.log("Error")
      
            });
          }
      })
    
  }

  editMilestone(id: any): void {
    this.route.navigate(['/milestone/edit/'+id])

  }
  addNewMilestone(): void {
    this.route.navigate(['/milestone/new/'+ this.projectId])
  }

  deleteMilestone(id: any): void{
    const message = `Are you sure you want to delete milestone?`
    const dialogData = new ConfirmDialogModel('Confirm Action', message);
    const dialogRef = this.dialog.open(ConfirmationComponent, {
        maxWidth: '400px',
        data: dialogData
    });

    dialogRef.afterClosed().subscribe(dialogResult => {
      this.result = dialogResult;
        if (this.result === true){
          this.milestoneService.delete(id).subscribe(
            result => {
              console.log("DELETED");
              this.toastr.success('Milestone deleted');
              window.location.reload();
            }, error => {
              this.toastr.error('Cannot delete milestone');
              console.log("Error")
      
            });
          }
      })
  }

  editLabel(id: any): void {
    this.route.navigate(['/label/edit/'+id])

  }

  deleteLabel(id: any): void{
    const message = `Are you sure you want to delete label?`
    const dialogData = new ConfirmDialogModel('Confirm Action', message);
    const dialogRef = this.dialog.open(ConfirmationComponent, {
        maxWidth: '400px',
        data: dialogData
    });

    dialogRef.afterClosed().subscribe(dialogResult => {
      this.result = dialogResult;
        if (this.result === true){
          this.labelService.delete(id).subscribe(
            result => {
              console.log("DELETED");
              this.toastr.success('Label deleted');
              window.location.reload();
            }, error => {
              this.toastr.error('Cannot delete label');
              console.log("Error")
      
            });
          }
      })
  }

  addNewLabel() {
    this.route.navigate(['/label/new/' + this.projectId]);
  }

  addNewDeveloper(){
    this.route.navigate(['/add-developers/'+ this.projectId])
  }

  removeUser(user: any){
    const message = `Are you sure you want to remove developer?`
    const dialogData = new ConfirmDialogModel('Confirm Action', message);
    const dialogRef = this.dialog.open(ConfirmationComponent, {
        maxWidth: '400px',
        data: dialogData
    });

    dialogRef.afterClosed().subscribe(dialogResult => {
      this.result = dialogResult;
        if (this.result === true){
          this.projectService.removeDeveloper(user).subscribe(
            res => {
              console.log("REMOVED");
              this.toastr.success('Developer removed');
              window.location.reload();
            }, error => {
              this.toastr.error("Cannot remove developer");
            }
          )
         
          }
      })
  }

}
