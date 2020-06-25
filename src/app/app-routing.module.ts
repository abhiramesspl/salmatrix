import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LogInComponent } from './components/log-in/log-in.component';
import { RegisterComponent } from './components/register/register.component';
import { ForgotPasswordComponent } from './components/forgot-password/forgot-password.component';
import { ResetPasswordComponent } from './components/reset-password/reset-password.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { NewMatrixComponent } from './components/new-matrix/new-matrix.component';
import { CountryRegionComponent} from './components/pages/country-region/country-region.component';

const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: 'login' },
  { path: 'login', component: LogInComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'fpassword', component: ForgotPasswordComponent },
  { path: 'rpassword', component: ResetPasswordComponent },
  { path: 'dashboard', component: DashboardComponent },
  { path: 'new-matrix', component: NewMatrixComponent },
  { path: 'country-region', component: CountryRegionComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
