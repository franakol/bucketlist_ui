import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';
import { UserGuard } from './user.guard';
import { BucketlistComponent } from './components/bucketlist/bucketlist.component';
import { ItemsComponent } from './components/items/items.component';




const routes: Routes = [
  {path: 'login', component: LoginComponent},
  {path: 'register', component: RegisterComponent},
  {path: 'dashboard', component: DashboardComponent},
  {path: 'bucketlist', component: BucketlistComponent},
  {path: 'items/:bucketName', component: ItemsComponent},
  { path: '', redirectTo: '/dashboard', pathMatch: 'full' },
 
  
  
  
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
