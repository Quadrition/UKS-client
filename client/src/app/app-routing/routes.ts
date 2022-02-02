import { Routes } from '@angular/router';
import { LoginPageComponent } from '../components/auth/login-page/login-page.component';
import { RegistrationComponent } from '../components/auth/registration/registration.component';
import { AllLabelsComponent } from '../components/label/all-labels/all-labels.component';
import { EditLabelComponent } from '../components/label/edit-label/edit-label.component';
import { NewLabelComponent } from '../components/label/new-label/new-label.component';
import { AllMilestonesComponent } from '../components/milestone/all-milestones/all-milestones.component';
import { EditMilestoneComponent } from '../components/milestone/edit-milestone/edit-milestone.component';
import { NewMilestoneComponent } from '../components/milestone/new-milestone/new-milestone.component';
import { AllProjectsComponent } from '../components/project/all-projects/all-projects.component';
import { EditProjectComponent } from '../components/project/edit-project/edit-project.component';
import { NewProjectComponent } from '../components/project/new-project/new-project.component';
import { ProjectDetailsComponent } from '../components/project/project-details/project-details.component';
import { LoginGuard } from '../guards/login/login.service';
import { RoleGuard } from '../guards/role/role.service';


export const routes: Routes = [
    {
       path: 'login',
       component: LoginPageComponent,
       canActivate: [LoginGuard] // putanja kojoj moze da pristupi korisnik samo ukoliko NIJE ulogovan
    },
    {
      path: 'register',
      component: RegistrationComponent,
      canActivate: [LoginGuard] // putanja kojoj moze da pristupi korisnik samo ukoliko NIJE ulogovan
   },
    {
        path: 'label',
        component: AllLabelsComponent,
        canActivate: [RoleGuard],
        data: {expectedRoles: 'ROLE_USER'}
     },
     {
        path: 'label/new',
        component: NewLabelComponent,
        canActivate: [RoleGuard],
        data: {expectedRoles: 'ROLE_USER'}
     },
     {
        path: 'label/edit/:id',
        component: EditLabelComponent,
        canActivate: [RoleGuard],
        data: {expectedRoles: 'ROLE_USER'}
     },

     {
      path: 'project',
      component: AllProjectsComponent,
      canActivate: [RoleGuard],
      data: {expectedRoles: 'ROLE_USER'}
   },
   {
      path: 'project/new',
      component: NewProjectComponent,
      canActivate: [RoleGuard],
      data: {expectedRoles: 'ROLE_USER'}
   },
   {
      path: 'project/edit/:id',
      component: EditProjectComponent,
      canActivate: [RoleGuard],
      data: {expectedRoles: 'ROLE_USER'}
   },
   {
      path: 'project/details/:id',
      component: ProjectDetailsComponent,
      canActivate: [RoleGuard],
      data: {expectedRoles: 'ROLE_USER'}
   },
   {
      path: 'milestone',
      component: AllMilestonesComponent,
      canActivate: [RoleGuard],
      data: {expectedRoles: 'ROLE_USER'}
   },
   {
      path: 'milestone/new',
      component: NewMilestoneComponent,
      canActivate: [RoleGuard],
      data: {expectedRoles: 'ROLE_USER'}
   },
   {
      path: 'milestone/edit/:id',
      component: EditMilestoneComponent,
      canActivate: [RoleGuard],
      data: {expectedRoles: 'ROLE_USER'}
   },
    // {
    //     path: 'register',
    //     component: RegisterPageComponent,
    //     canActivate: [LoginGuard]
    // },
    
    // {
    // putanja kojoj moze da pristupi samo registrivani korisnik sa konkretnom ulogom
    //     path: 'favorites',
    //     component: FavoriteComponent,
    //     canActivate: [RoleGuard],
    //     data: {expectedRoles: 'ROLE_REGISTERED_USER'}
    // },
];
