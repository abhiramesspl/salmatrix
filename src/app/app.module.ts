import { BrowserModule } from '@angular/platform-browser';
import { NgModule,CUSTOM_ELEMENTS_SCHEMA  } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LogInComponent } from './components/log-in/log-in.component';
import { RegisterComponent } from './components/register/register.component';
import { CountryRegionComponent } from './components/pages/country-region/country-region.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AngularMaterialModule } from './angular-material.module';
import { FlexLayoutModule } from '@angular/flex-layout';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ForgotPasswordComponent } from './components/forgot-password/forgot-password.component';
import { ResetPasswordComponent } from './components/reset-password/reset-password.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { NewMatrixComponent } from './components/new-matrix/new-matrix.component';
import { RegionComponent } from './components/pages/region/region.component';
import { HeaderComponent } from './components/generic/header/header.component';
import { AddmatrixComponent } from './components/addmatrix/addmatrix.component';
import { BranchComponent } from './components/branch/branch.component';
import { ProductGroupComponent } from './components/product-group/product-group.component';
import { ProductCategoryComponent } from './components/product-category/product-category.component';
import { LivingWageBenchmarkComponent } from './components/living-wage-benchmark/living-wage-benchmark.component';

@NgModule({
  declarations: [
    AppComponent,
    LogInComponent,
    RegisterComponent,
    ForgotPasswordComponent,
    ResetPasswordComponent,
    DashboardComponent,
    NewMatrixComponent,
    CountryRegionComponent,
    RegionComponent,
    HeaderComponent,
    AddmatrixComponent,
    BranchComponent,
    ProductGroupComponent,
    ProductCategoryComponent,
    LivingWageBenchmarkComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    AngularMaterialModule,
    FlexLayoutModule,
    FormsModule, 
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class AppModule { }
