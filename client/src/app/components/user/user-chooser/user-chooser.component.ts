import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrModule, ToastrService } from 'ngx-toastr';
import { Project } from 'src/app/model/Project';
import { User } from 'src/app/model/User';
import { ProjectService } from 'src/app/services/project/project.service';
import { UserService } from 'src/app/services/user/user.service';

@Component({
  selector: 'app-user-chooser',
  templateUrl: './user-chooser.component.html',
  styleUrls: ['./user-chooser.component.scss']
})
export class UserChooserComponent implements OnInit {

  result: any;
  users: User[] = [];
  searchForm!: FormGroup;
  projectId: any;
  project: Project = {};

  constructor(
    public dialog: MatDialog,
    private fb: FormBuilder,
    private userService: UserService,
    private projectService: ProjectService,
    private toastr: ToastrService,
    private route: ActivatedRoute,
    private router: Router,
  ) { }

  ngOnInit(): void {
    this.projectId = this.route.snapshot.params.projectId;
    this.createForm()
    //this.users.push({id: 4, firstName: "Svetozar", lastName: "Miletic", username: "mile"})

  }
  createForm():void{
    this.searchForm = this.fb.group({
      username: ['']
      });

  }

  search():void{
    if(this.searchForm.value.username != "") {
      this.userService.findByUsername(this.searchForm.value.username).subscribe(
        res=>{
          this.users = res.body as User[];
        }
      )
    }
  }
  choose(user: any){
    this.projectService.getOne(this.projectId).subscribe(
      res => {
        this.project = res.body as Project;
        this.project.developers?.push(user);
        this.projectService.edit(this.project).subscribe(
          res => {
            console.log("Developer added to project");
          }, error => {
            console.log("cannot edit project");
          }
        );
        this.toastr.success("Developer added");
      }, error => {
        this.toastr.error("Cannot add developer");
      }
    )
  }
}
