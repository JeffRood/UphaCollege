import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CoursesService {

  constructor(private _http:HttpClient) { }

  getCourses():Observable<any>
  {
    return this._http.get<any>('https://localhost:44325/api/Courses');
  }

  getCoursesById(id:number):Observable<any>
  {
    return this._http.get<any>(`https://localhost:44325/api/Courses/${id}`)
  }

  postCourses(CoursesData:any):Observable<any>
  {
    return this._http.post('https://localhost:44325/api/Courses', CoursesData)
  }

  putCourses(CoursesData:any, id:number):Observable<any>
  {
    return this._http.put(`https://localhost:44325/api/Courses/${id}`, CoursesData)
  }
  deleteCourses(id:number):Observable<any>
  {
    return this._http.delete(`https://localhost:44325/api/Courses/${id}`,)
  }
}
