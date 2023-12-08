import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminComponent } from './admin/admin.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { Dashboard2Component } from './dashboard2/dashboard2.component';
import { Dashboard3Component } from './dashboard3/dashboard3.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { MahasiswaComponent } from './mahasiswa/mahasiswa.component';
import { otentikasiGuard } from './otentikasi.guard';
import { ForexComponent } from './forex/forex.component';

const routes: Routes = [
  { path: '', redirectTo: 'login', pathMatch: 'full' },
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'admin', component: AdminComponent },
  {
    path: 'dashboard',
    component: DashboardComponent,
    canActivate: [otentikasiGuard],
  },
  {
    path: 'dashboard2',
    component: Dashboard2Component,
    canActivate: [otentikasiGuard],
  },
  {
    path: 'dashboard3',
    component: Dashboard3Component,
    canActivate: [otentikasiGuard],
  },
  {
    path: 'mahasiswa',
    component: MahasiswaComponent,
    canActivate: [otentikasiGuard],
  },
  {
    path: 'forex',
    component: ForexComponent,
    canActivate: [otentikasiGuard],
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
