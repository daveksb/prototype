import { Injectable } from '@angular/core';
import { SystemFlow } from '@prisma/client';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class SystemFlowService {
  API_URL = 'http://localhost:3333/api';

  constructor(private readonly http: HttpClient) {}

  public getflows(): Observable<SystemFlow[]> {
    return this.http.get<SystemFlow[]>(`${this.API_URL}/system-flow`);
  }

  public getFlow(flowId: string): Observable<SystemFlow> {
    return this.http.get<SystemFlow>(`${this.API_URL}/system-flow/current`);
  }

  /* public getNextPage(current_flow: string): Observable<SystemFlow> {
    return this.http.get<SystemFlow>(`${this.API_URL}/system-flow`);
  } */
}
