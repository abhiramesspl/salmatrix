import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LogInComponent } from './components/log-in/log-in.component';
import { RegisterComponent } from './components/register/register.component';
import { ForgotPasswordComponent } from './components/forgot-password/forgot-password.component';
import { ResetPasswordComponent } from './components/reset-password/reset-password.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { NewMatrixComponent } from './components/new-matrix/new-matrix.component';
import { CountryRegionComponent} from './components/pages/country-region/country-region.component';
import { RegionComponent } from './components/pages/region/region.component';
import { HeaderComponent } from './components/generic/header/header.component';
import { AddmatrixComponent } from './components/addmatrix/addmatrix.component';
import { BranchComponent } from './components/branch/branch.component';
import { ProductCategoryComponent } from './components/product-category/product-category.component';
import { ProductGroupComponent } from './components/product-group/product-group.component';
import { LivingWageBenchmarkComponent } from './components/living-wage-benchmark/living-wage-benchmark.component';
import { VerificationAndValidationComponent } from './components/verification-and-validation/verification-and-validation.component';
import { SupplieruserComponent } from './components/supplieruser/supplieruser.component';
import { ClientuserComponent } from './components/clientuser/clientuser.component';
import { ManagematricesComponent } from './components/managematrices/managematrices.component';
import { ProductSubgroupComponent } from './components/product-subgroup/product-subgroup.component';

const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: 'login' },
  { path: 'login', component: LogInComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'fpassword', component: ForgotPasswordComponent },
  { path: 'rpassword', component: ResetPasswordComponent },
  { path: 'dashboard', component: DashboardComponent },
  { path: 'new-matrix', component: NewMatrixComponent },
  { path: 'country', component: CountryRegionComponent},
  { path: 'region', component: RegionComponent },
  { path: 'addmatrix', component: AddmatrixComponent},
  { path: 'branch', component: BranchComponent},
  { path: 'product-category', component: ProductCategoryComponent},
  { path: 'product-group', component: ProductGroupComponent},
  { path: 'product-subgroup', component: ProductSubgroupComponent},
  { path: 'living-wage-benchmark', component: LivingWageBenchmarkComponent},
  { path: 'verification-validation', component: VerificationAndValidationComponent},
  { path: 'supplieruser', component: SupplieruserComponent},
  { path: 'clientuser', component: ClientuserComponent},
  { path: 'allmatrices', component: ManagematricesComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
