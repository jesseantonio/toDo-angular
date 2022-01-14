import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class TasksService {

  private baseUrl = `${environment.baseUrl}/tasks`

  constructor(private http: HttpClient) { }

  all(){
    return this.http.get(this.baseUrl)
  }
}
