import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SelectionServiceService {

  constructor(private _http:HttpClient) { }

  SaveSelection(data:any):Observable<any>
  {
    console.log(data)
     return this._http.post<any>('https://localhost:44325/api/Selection/Post',data);
  }

  GetSelection(id:number):Observable<any>
  {
     return this._http.get<any>(`https://localhost:44325/api/Selection/Get/${id}`);
  }


}
