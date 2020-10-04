import { Component, OnInit } from '@angular/core';
import {Faculty} from '../faculty';
import {ActivatedRoute} from '@angular/router';
import {FacultyService} from '../faculty.service';
import { Location } from '@angular/common';

class HeroService {
}

@Component({
  selector: 'app-add-edit-faculty',
  templateUrl: './add-edit-faculty.component.html',
  styleUrls: ['./add-edit-faculty.component.css']
})
export class AddEditFacultyComponent implements OnInit {
  faculty: {
    name: ''
  };
  // getFaculty(): void {
  //   const id = +this.route.snapshot.paramMap.get('id');
  //   this.facultyService.getFaculty(id)
  //     .subscribe(faculty => this.faculty = faculty);
  // }
  constructor(
    private route: ActivatedRoute,
    private facultyService: FacultyService,
    private location: Location
  ) { }

  create(): void {
    const data = {
      name: this.faculty.name,
      careers: []
    };

    this.facultyService.create(data).subscribe(
      response => {
        console.log(response);
      },
      error => {
        console.log(error);
      }
    );
  }

  ngOnInit(): void {
    // this.getFaculty();
  }

  goBack(): void {
    this.location.back();
  }

  update(): void {

  }
}
