import { NewGitRepoComponent } from './../components/gitRepo/new-git-repo/new-git-repo.component';
import { Routes } from '@angular/router';
import { LoginPageComponent } from '../components/auth/login-page/login-page.component';
import { AllGitReposComponent } from '../components/gitRepo/all-git-repos/all-git-repos.component';
import { RegistrationComponent } from '../components/auth/registration/registration.component';
import { AllLabelsComponent } from '../components/label/all-labels/all-labels.component';
import { EditLabelComponent } from '../components/label/edit-label/edit-label.component';
import { NewLabelComponent } from '../components/label/new-label/new-label.component';

import { AllStateChangesComponent } from '../components/stateChange/all-state-changes/all-state-changes.component';
import { EditStateChangeComponent } from '../components/stateChange/edit-state-change/edit-state-change.component';
import { NewStateChangeComponent } from '../components/stateChange/new-state-change/new-state-change.component';
import { AllMilestonesComponent } from '../components/milestone/all-milestones/all-milestones.component';
import { EditMilestoneComponent } from '../components/milestone/edit-milestone/edit-milestone.component';
import { NewMilestoneComponent } from '../components/milestone/new-milestone/new-milestone.component';
import { AllProjectsComponent } from '../components/project/all-projects/all-projects.component';
import { EditProjectComponent } from '../components/project/edit-project/edit-project.component';
import { NewProjectComponent } from '../components/project/new-project/new-project.component';
import { ProjectDetailsComponent } from '../components/project/project-details/project-details.component';
import { AllEventsComponent } from '../components/event/all-events/all-events.component';
import { EditEventComponent } from '../components/event/edit-event/edit-event.component';
import { NewEventComponent } from '../components/event/new-event/new-event.component';
import { AllCommentsComponent } from '../components/comment/all-comments/all-comments.component';
import { EditCommentComponent } from '../components/comment/edit-comment/edit-comment.component';
import { NewCommentComponent } from '../components/comment/new-comment/new-comment.component';
import { AllLabelApplicationsComponent } from '../components/labelApplication/all-labelApplications/all-labelApplications.component';
import { EditLabelApplicationComponent } from '../components/labelApplication/edit-labelApplication/edit-labelApplication.component';
import { NewLabelApplicationComponent } from '../components/labelApplication/new-labelApplication/new-labelApplication.component';
import { LoginGuard } from '../guards/login/login.service';
import { RoleGuard } from '../guards/role/role.service';
import { EditGitRepoComponent } from '../components/gitRepo/edit-git-repo/edit-git-repo.component';


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
      path: 'gitRepo',
      component: AllGitReposComponent,
      canActivate: [RoleGuard],
      data: {expectedRoles: 'ROLE_USER'}
     },
     {
      path: 'gitRepo/new',
      component: NewGitRepoComponent,
      canActivate: [RoleGuard],
      data: {expectedRoles: 'ROLE_USER'}
     },  
     {
      path: 'gitRepo/edit/:id',
      component: EditGitRepoComponent,
      canActivate: [RoleGuard],
      data: {expectedRoles: 'ROLE_USER'}
     },   

     {
      path: 'stateChange',
      component: AllStateChangesComponent,
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

      path: 'stateChange/new',
      component: NewStateChangeComponent,
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

      path: 'stateChange/edit/:id',
      component: EditStateChangeComponent,
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
   {
      path: 'event',
      component: AllEventsComponent,
      canActivate: [RoleGuard],
      data: {expectedRoles: 'ROLE_USER'}
   },
   {
      path: 'event/new',
      component: NewEventComponent,
      canActivate: [RoleGuard],
      data: {expectedRoles: 'ROLE_USER'}
   },
   {
      path: 'event/edit/:id',
      component: EditEventComponent,
      canActivate: [RoleGuard],
      data: {expectedRoles: 'ROLE_USER'}
   },
   {
      path: 'comment',
      component: AllCommentsComponent,
      canActivate: [RoleGuard],
      data: {expectedRoles: 'ROLE_USER'}
   },
   {
      path: 'comment/new',
      component: NewCommentComponent,
      canActivate: [RoleGuard],
      data: {expectedRoles: 'ROLE_USER'}
   },
   {
      path: 'comment/edit/:id',
      component: EditCommentComponent,
      canActivate: [RoleGuard],
      data: {expectedRoles: 'ROLE_USER'}
   },
   {
      path: 'labelApplication',
      component: AllLabelApplicationsComponent,
      canActivate: [RoleGuard],
      data: {expectedRoles: 'ROLE_USER'}
   },
   {
      path: 'labelApplication/new',
      component: NewLabelApplicationComponent,
      canActivate: [RoleGuard],
      data: {expectedRoles: 'ROLE_USER'}
   },
   {
      path: 'labelApplication/edit/:id',
      component: EditLabelApplicationComponent,
      canActivate: [RoleGuard],
      data: {expectedRoles: 'ROLE_USER'}
   },
    {
        path: 'register',
        //component: RegisterPageComponent,
        component: RegistrationComponent,
        canActivate: [LoginGuard]
    },
    
    // {
    // putanja kojoj moze da pristupi samo registrivani korisnik sa konkretnom ulogom
    //     path: 'favorites',
    //     component: FavoriteComponent,
    //     canActivate: [RoleGuard],
    //     data: {expectedRoles: 'ROLE_REGISTERED_USER'}
    // },
];
