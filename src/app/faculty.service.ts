import { Injectable } from '@angular/core';
import {Faculty} from './faculty';
import {FACULTIES} from './mock-faculties';
import {Observable, of} from 'rxjs';
import {HttpClient} from '@angular/common/http';

const baseUrl = 'http://localhost:8080/faculties';

@Injectable({
  providedIn: 'root'
})
export class FacultyService {

  constructor(
    private http: HttpClient
  ) { }

  getAll(): Observable<any> {
    return this.http.get(baseUrl);
  }

  get(id): Observable<any> {
    return this.http.get(`${baseUrl}/${id}`);
  }

  create(data): Observable<any> {
    return this.http.post(baseUrl, data);
  }

  update(id, data): Observable<any> {
    return this.http.put(`${baseUrl}/${id}`, data);
  }

  delete(id): Observable<any> {
    return this.http.delete(`${baseUrl}/${id}`);
  }

  // getFaculties(): Faculty[] {
  //   return FACULTIES;
  // }
  // getFaculty(id: number): Observable<Faculty> {
  //   return of(FACULTIES.find(faculty => faculty.id === id));
  // }
}
