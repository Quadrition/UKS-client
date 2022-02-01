import { Routes } from '@angular/router';
import { LoginPageComponent } from '../components/auth/login-page/login-page.component';
import { LoginGuard } from '../guards/login/login.service';


export const routes: Routes = [
    {
       path: 'login',
       component: LoginPageComponent,
       canActivate: [LoginGuard] // putanja kojoj moze da pristupi korisnik samo ukoliko NIJE ulogovan
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
