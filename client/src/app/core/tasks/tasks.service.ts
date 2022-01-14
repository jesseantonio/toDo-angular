import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Task } from '../model/task';
import { Subject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TasksService {

    private _task = new Subject<Task>();

    private baseUrl = `${environment.baseUrl}/tasks`

  constructor(private http: HttpClient) { }

  all(){
    return this.http.get<Task[]>(this.baseUrl)
  }

  insert(task: Task) {
    return this.http.post<Task>(this.baseUrl, task)
  }

  delete(id: string) {
      return this.http.delete<Task>(`${this.baseUrl}/tasks/${id}`)
  }

  getTask(): Observable<Task> {
    return this._task.asObservable();
  }

  setTask(task: Task) {
      this._task.next(task);
  }
}
