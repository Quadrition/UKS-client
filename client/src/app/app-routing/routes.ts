import { NewGitRepoComponent } from './../components/gitRepo/new-git-repo/new-git-repo.component';
import { Routes } from '@angular/router';
import { LoginPageComponent } from '../components/auth/login-page/login-page.component';
import { AllGitReposComponent } from '../components/gitRepo/all-git-repos/all-git-repos.component';
import { AllLabelsComponent } from '../components/label/all-labels/all-labels.component';
import { EditLabelComponent } from '../components/label/edit-label/edit-label.component';
import { NewLabelComponent } from '../components/label/new-label/new-label.component';
import { LoginGuard } from '../guards/login/login.service';
import { RoleGuard } from '../guards/role/role.service';


export const routes: Routes = [
    {
       path: 'login',
       component: LoginPageComponent,
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
