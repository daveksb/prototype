import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { system_flow } from '@prisma/client';
import { Observable } from 'rxjs';
import { SystemFlowService } from '../system-flow.service';

@Component({
  selector: 'prototype-page-a',
  templateUrl: './page-a.component.html',
  styleUrls: ['./page-a.component.scss'],
})
export class PageAComponent implements OnInit {
  public $flows: Observable<system_flow[]> | null = null;

  constructor(
    public systemFlowService: SystemFlowService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.$flows = this.systemFlowService.getflows();
  }

  goToNextPage() {
    this.router.navigate(['/page-b']);
  }
}
