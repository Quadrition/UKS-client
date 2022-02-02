import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AllBranchesComponent } from './all-branches/all-branches.component';
import { NewBranchComponent } from './new-branch/new-branch.component';
import { DeleteBranchComponent } from './delete-branch/delete-branch.component';



@NgModule({
  declarations: [
    AllBranchesComponent,
    NewBranchComponent,
    DeleteBranchComponent
  ],
  imports: [
    CommonModule
  ]
})
export class BranchModule { }
