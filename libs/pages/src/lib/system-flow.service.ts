import { Injectable } from '@angular/core';
import { Service, SystemFlow } from '@prisma/client';
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

  public getCurrentPage(flowId: string): Observable<SystemFlow> {
    return this.http.get<SystemFlow>(`${this.API_URL}/system-flow/${flowId}`);
  }

  public getNextPage(currentId: string): Observable<SystemFlow> {
    return this.http.get<SystemFlow>(
      `${this.API_URL}/system-flow/next/${currentId}`
    );
  }

  public getFirstPage(flowName: string): Observable<SystemFlow> {
    return this.http.get<SystemFlow>(
      `${this.API_URL}/system-flow/first-page/${flowName}`
    );
  }

  public getCurrentPageService(flowId: string): Observable<Service> {
    return this.http.get<Service>(
      `${this.API_URL}/service-data/page/${flowId}`
    );
  }
}
