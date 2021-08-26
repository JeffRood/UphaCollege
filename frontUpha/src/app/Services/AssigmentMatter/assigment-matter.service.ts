import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AssigmentMatterService {

  constructor(private _http:HttpClient) { }

  postSellectionMatter(model:any):Observable<any>
  {
    return this._http.post('https://localhost:44325/api/MatterAssigment',model)
  }

}
