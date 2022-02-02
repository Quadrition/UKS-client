import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Project } from 'src/app/model/Project';
import { ProjectService } from 'src/app/services/project/project.service';
import { ConfirmationComponent, ConfirmDialogModel } from '../../shared/confirmation/confirmation.component';

@Component({
  selector: 'app-all-projects',
  templateUrl: './all-projects.component.html',
  styleUrls: ['./all-projects.component.scss']
})
export class AllProjectsComponent implements OnInit {

  projects: Project[] = [];
  result: any;
  searchForm!: FormGroup;

  constructor(
    private projectService: ProjectService,
    public dialog: MatDialog,
    private fb: FormBuilder,
    private router: Router,
    private toastr: ToastrService,
  ) { }

  ngOnInit(): void {

    this.projectService.getAll().subscribe(
      res => {
        this.projects = res.body as Project[];
       
      });
  }

  details(id: any): void {
    this.router.navigate(['/project/details/'+id])

  }
  addNew(): void {
    this.router.navigate(['/project/new'])

  }

  edit(id: any): void {
    this.router.navigate(['/project/edit/'+id])

  }

  delete(id: any): void{
    const message = `Are you sure you want to delete project?`
    const dialogData = new ConfirmDialogModel('Confirm Action', message);
    const dialogRef = this.dialog.open(ConfirmationComponent, {

        maxWidth: '400px',
        data: dialogData
    });

    dialogRef.afterClosed().subscribe(dialogResult => {
      this.result = dialogResult;
        if (this.result === true){
          this.projectService.delete(id).subscribe(
            result => {
              console.log("DELETED");
              this.toastr.success('Project deleted');
              window.location.reload();
            }, error => {
              this.toastr.error('Cannot delete project');
              console.log("Error")
      
            });
          }
      })
  }
  /*
  za pretragu??
   createForm():void{
    this.searchForm = this.fb.group({
      name: ['']
      });

  }

  refresh(): void {
    this.searchForm.value.name="";
    this.labelService.getAll().subscribe(
      res => {
        this.labels = res.body as Label[];
       
      });
  }

  search():void{
    if(this.searchForm.value.name != "") {
      this.labelService.search(this.searchForm.value.name).subscribe(
        res=>{
          this.labels = res.body as Label[];
        }
      )
    }
  }
  */

}
