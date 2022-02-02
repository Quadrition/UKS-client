import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Label } from 'src/app/model/Label';
import { LabelService } from 'src/app/services/label/label.service';
import { ConfirmationComponent, ConfirmDialogModel } from '../../shared/confirmation/confirmation.component';

@Component({
  selector: 'app-all-labels',
  templateUrl: './all-labels.component.html',
  styleUrls: ['./all-labels.component.scss']
})
export class AllLabelsComponent implements OnInit {

  labels: Label[] = [];
  result: any;
  searchForm!: FormGroup;

  constructor(
    private labelService: LabelService,
    public dialog: MatDialog,
    private fb: FormBuilder,
    private router: Router,
    private toastr: ToastrService,
  ) { }

  ngOnInit(): void {

    this.labelService.getAll().subscribe(
      res => {
        this.labels = res.body as Label[];
       
      });
  }

  edit(id: any): void {
    this.router.navigate(['/label/edit/'+id])

  }

  delete(id: any): void{
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
