import { Component, OnInit } from '@angular/core';
import {FACULTIES} from '../mock-faculties';
import {FacultyService} from '../faculty.service';
import {Faculty} from '../faculty';

@Component({
  selector: 'app-list-faculties',
  templateUrl: './list-faculties.component.html',
  styleUrls: ['./list-faculties.component.css']
})
export class ListFacultiesComponent implements OnInit {
  title = 'List of Faculties';
  faculties: Faculty[];
  columns = ['id', 'name'];
  constructor(private facultyService: FacultyService) { }

  getAll(): void {
    this.facultyService.getAll().subscribe(
      data => {
        this.faculties = data;
        console.log(data);
      },
      error => {
        console.log(error);
      }
    );
  }
  // getFaculties(): void {
  //   this.faculties = this.facultyService.getFaculties();
  // }
  ngOnInit(): void {
    this.getAll();
    // this.getFaculties();
  }

}
