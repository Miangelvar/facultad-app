import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {ListFacultiesComponent} from './list-faculties/list-faculties.component';
import {AddEditFacultyComponent} from './add-edit-faculty/add-edit-faculty.component';
import {DashboardComponent} from './dashboard/dashboard.component';

const routes: Routes = [
  { path: '', redirectTo: 'dashboard', pathMatch: 'full' },
  {path: 'dashboard', component: DashboardComponent},
  {path: 'faculties', component: ListFacultiesComponent},
  {path: 'faculties/add', component: AddEditFacultyComponent},
  {path: 'faculties/:id', component: AddEditFacultyComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
