import { Component, OnInit } from '@angular/core';
import {FACULTIES} from '../mock-faculties';

@Component({
  selector: 'app-faculties',
  templateUrl: './faculties.component.html',
  styleUrls: ['./faculties.component.css']
})
export class FacultiesComponent implements OnInit {
  facultiesTitle = 'Faculties';
  constructor() { }
  ngOnInit(): void {
  }

}
