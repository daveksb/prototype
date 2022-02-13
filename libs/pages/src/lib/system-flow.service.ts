import { Injectable } from '@angular/core';
import { system_flow } from '@prisma/client';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class SystemFlowService {
  API_URL = 'http://localhost:3333/api';

  constructor(private readonly http: HttpClient) {}

  public getflows(): Observable<system_flow[]> {
    {
      return this.http.get<system_flow[]>(`${this.API_URL}/system-flow`);
    }
  }
}
