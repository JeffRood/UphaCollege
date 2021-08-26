import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TeacherService {

  constructor(private _http:HttpClient) { }

  getTeachers():Observable<any>
  {
    return this._http.get<any>('https://localhost:44325/api/Teacher')
  }

  getTeachersById(id:number):Observable<any>
  {
    return this._http.get<any>(`https://localhost:44325/api/Teacher/${id}`)
  }

  postTeachers(TeacherData:any):Observable<any>
  {
    return this._http.post('https://localhost:44325/api/Teacher', TeacherData)
  }

  putTeachers(TeacherData:any, id:number):Observable<any>
  {
    return this._http.put(`https://localhost:44325/api/Teacher/${id}`, TeacherData)
  }
  deleteTeachers(id:number):Observable<any>
  {
    return this._http.delete(`https://localhost:44325/api/Teacher/${id}`,)
  }
}
