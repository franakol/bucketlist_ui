import { NgModule } from '@angular/core';
import { ReactiveFormsModule, FormsModule} from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { HeaderComponent } from './components/header/header.component';
import { SidenavComponent } from './components/sidenav/sidenav.component';

import { HttpClientModule} from '@angular/common/http';
import { RouterModule } from '@angular/router';
import { BucketlistComponent } from './components/bucketlist/bucketlist.component';
import { ItemsComponent } from './components/items/items.component';
import { NgxPaginationModule } from 'ngx-pagination';





@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegisterComponent,
    DashboardComponent,
    HeaderComponent,
    SidenavComponent,
    BucketlistComponent,
    ItemsComponent,
  
  
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule,
    RouterModule,
    FormsModule,
    NgxPaginationModule,
    

  ],
  providers: [ ],
  bootstrap: [AppComponent]
})
export class AppModule { }
