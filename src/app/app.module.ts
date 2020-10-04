import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavigationComponent } from './navigation/navigation.component';
import { FacultiesComponent } from './faculties/faculties.component';
import { ListFacultiesComponent } from './list-faculties/list-faculties.component';
import { AddEditFacultyComponent } from './add-edit-faculty/add-edit-faculty.component';
import {FormsModule} from '@angular/forms';


@NgModule({
  declarations: [
    AppComponent,
    NavigationComponent,
    FacultiesComponent,
    ListFacultiesComponent,
    AddEditFacultyComponent
  ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        FormsModule
    ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
