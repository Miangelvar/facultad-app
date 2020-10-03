import { Component, OnInit } from '@angular/core';
import {FACULTIES} from '../mock-faculties';

@Component({
  selector: 'app-list-faculties',
  templateUrl: './list-faculties.component.html',
  styleUrls: ['./list-faculties.component.css']
})
export class ListFacultiesComponent implements OnInit {
  title = 'List of Faculties';
  faculties = FACULTIES;
  columns = ['id', 'name'];
  constructor() { }

  ngOnInit(): void {
  }

}
