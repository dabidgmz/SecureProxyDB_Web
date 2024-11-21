import { Routes } from '@angular/router';
import { HttpClientModule } from '@angular/common/http'
import { IndexUsersComponent } from './index-user/index-user.component';
import { LoginFormComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { CodeVerifyComponent } from './code-verify/code-verify.component';
export const routes: Routes = [
    { path: 'login', component: LoginFormComponent},
    { path: 'register', component: RegisterComponent},
    { path: 'users', component: IndexUsersComponent},
    { path: 'code', component: CodeVerifyComponent},
];
