import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { User } from 'src/app/model/User';
import { UserService } from 'src/app/services/user/user.service';
import { AuthenticationService } from 'src/app/services/authentication/authentication.service';
import { ActivatedRoute, Route, Router } from '@angular/router';


@Component({
  selector: 'app-profile-details',
  templateUrl: './profile-details.component.html',
  styleUrls: ['./profile-details.component.scss']
})
export class ProfileDetailsComponent implements OnInit {

  regForm!: FormGroup;
  currentUser: User = {};

  constructor(
    private fb: FormBuilder,
    private userService: UserService,
    private toastr: ToastrService,
    private authenticationService: AuthenticationService,
    private router: Router,
  ) { }

  ngOnInit(): void {
    this.createForm();
    this.userService.getCurrent().subscribe(
      res => {
        this.currentUser = res.body as User;
        this.regForm = this.fb.group({
          firstName: [this.currentUser.firstName],
          lastName: [this.currentUser.lastName],
          email: [this.currentUser.username],
          password: [''],
          repeatedPass: [''],
        });
      }
    )
    
  }

  createForm() : void{
    this.regForm = this.fb.group({
      firstName: ['', Validators.required],
      lastName: ['',  Validators.required],
      email:['',  Validators.required],
      password: [''],
      repeatedPass: ['']
    });
  }

  edit(): void {
    if(this.regForm.value.password == ""){
      this.toastr.error("Input passwords");
      return;
    }
    if(this.regForm.value.password != this.regForm.value.repeatedPass){
      this.toastr.error("Password missmatch")
      return;
    }
    this.currentUser.firstName =  this.regForm.get('firstName')?.value;
    this.currentUser.lastName = this.regForm.get('lastName')?.value;
    this.currentUser.username = this.regForm.get('email')?.value,
    this.currentUser.password = this.regForm.value.password;
    
    this.userService.edit(this.currentUser).subscribe(
      res => {
        this.toastr.success("Profile edited");
        const auth: any = {};
        auth.username = this.regForm.value.username;
        auth.password = this.regForm.value.password;
        
      }, error => {
        this.toastr.error("Cannot edit profile")
      }
    )
  }
  
  deactivate(){
    if(this.regForm.value.password == ""){
      this.toastr.error("Input passwords");
      return;
    }
    this.userService.deactivate(this.currentUser).subscribe(
      res => {
        this.authenticationService.signOut().subscribe(
          result => {
              localStorage.removeItem('user');
              this.router.navigate(['/login']);
          }
        );
        this.toastr.success("Profile deactivated")
      }
    )
  }

}
