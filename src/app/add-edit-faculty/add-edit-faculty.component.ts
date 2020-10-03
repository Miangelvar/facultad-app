import { Component, OnInit } from '@angular/core';
import {Faculty} from '../faculty';

@Component({
  selector: 'app-add-edit-faculty',
  templateUrl: './add-edit-faculty.component.html',
  styleUrls: ['./add-edit-faculty.component.css']
})
export class AddEditFacultyComponent implements OnInit {
  faculty: Faculty = {
    id: 1, name: 'FCA', careers: []
  };
  constructor() { }

  ngOnInit(): void {
  }

}
