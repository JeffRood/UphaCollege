import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class StudentService {

  constructor(private _http:HttpClient) { }

  getStudents():Observable<any>
  {
    return this._http.get<any>('https://localhost:44325/api/Student')
  }

  getStudentsById(id:number):Observable<any>
  {
    return this._http.get<any>(`https://localhost:44325/api/Student/${id}`)
  }

  postStudents(StudentData:any):Observable<any>
  {
    return this._http.post('https://localhost:44325/api/Student', StudentData)
  }

  putStudents(StudentData:any, id:number):Observable<any>
  {
    return this._http.put(`https://localhost:44325/api/Student/${id}`, StudentData)
  }
  deleteStudents(id:number):Observable<any>
  {
    return this._http.delete(`https://localhost:44325/api/Student/${id}`,)
  }
}
