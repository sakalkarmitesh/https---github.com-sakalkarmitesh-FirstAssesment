import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { EmployeeComponent } from './Employee/Employee.component';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatInputModule} from '@angular/material/input';
import { FormsModule } from '@angular/forms';
import { EmployeeListComponent } from './EmployeeList/EmployeeList.component';
import {MatSelectModule} from '@angular/material/select';

@NgModule({
  declarations: [
    AppComponent,EmployeeComponent,EmployeeListComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatInputModule,
    FormsModule,
    MatSelectModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
