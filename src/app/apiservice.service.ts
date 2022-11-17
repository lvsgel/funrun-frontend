import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http'
import { Observable } from 'rxjs';
const baseRunnerUrl = "http://localhost:8888/runners"
const createRunnerUrl = "http://localhost:8888/runners/add"
const delRunnerUrl = "http://localhost:8888/runners/del"
const putRunnerUrl = "http://localhost:8888/runners/put"

@Injectable({
  providedIn: 'root'
})
export class ApiserviceService {

  getRunners() {
    throw new Error('Method not implemented.');
  }


  constructor(private _http:HttpClient) { }
  //to connect the frontend to backend
//get all runner
getAllRunner():Observable<any>{
  const url = "http://localhost:8888/allrunners"
  return this._http.get<any>(url)
}

 // create runner
 createRunner(runner: any):Observable<any>{
  console.log(runner,'createapi=>');
  return this._http.post(createRunnerUrl, runner)
}

//deleting runner

deleteRunner(id: any): Observable<any> {
  return this._http.delete(`${delRunnerUrl}/${id}`);

}

//update runner
updateRunner(id: any, runner: any): Observable<any> {
  return this._http.put(`${putRunnerUrl}/${id}`, runner);

}

//get one runner
getOneRunner(id:any):Observable<any>{
  return this._http.get(`${baseRunnerUrl}/${id}`);
}

}
