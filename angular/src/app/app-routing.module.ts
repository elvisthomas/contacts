import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DefaultLayoutComponent } from './layouts/dashboard-layout';
// import { LoginComponent } from './views/auth/login/login.component';
import { AuthGuard } from './shared-ui/guard/auth.guard';

const routes: Routes = [
  { path: '', redirectTo: 'dashboard', pathMatch: 'full'},
  // { path: 'login', component: LoginComponent, pathMatch: 'full' },
  { path: 'admin', component: DefaultLayoutComponent, data: { title: 'Home' }, pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { useHash: true })],
  exports: [RouterModule],
  providers: [AuthGuard]
})
export class AppRoutingModule {
}
