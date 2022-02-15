import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { system_flow } from '@prisma/client';
import { Observable } from 'rxjs';
import { SystemFlowService } from '../system-flow.service';

@Component({
  selector: 'prototype-page-c',
  templateUrl: './page-c.component.html',
  styleUrls: ['./page-c.component.scss'],
})
export class PageCComponent implements OnInit {
  public $flows: Observable<system_flow[]> | null = null;

  constructor(
    public systemFlowService: SystemFlowService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.$flows = this.systemFlowService.getflows();
  }

  goToPrevPage() {
    this.router.navigate(['/page-b']);
  }

  goToNextPage() {
    this.router.navigate(['/page-a']);
  }
}
