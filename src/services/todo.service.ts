// src/app/services/todo.service.ts
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TodoService {
  private apiUrl = 'http://localhost:3000/todos'; // 👈 tu backend

  constructor(private http: HttpClient) {}

  // GET -> obtener todos
  getTodos(): Observable<any> {
    return this.http.get(this.apiUrl);
  }
}
