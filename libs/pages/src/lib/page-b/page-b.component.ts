import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { SystemFlow } from '@prisma/client';
import { Observable } from 'rxjs';
import { SystemFlowService } from '../system-flow.service';

@Component({
  selector: 'prototype-page-b',
  templateUrl: './page-b.component.html',
  styleUrls: ['./page-b.component.scss'],
})
export class PageBComponent implements OnInit {
  public $flows: Observable<SystemFlow[]> | null = null;

  constructor(
    public systemFlowService: SystemFlowService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.$flows = this.systemFlowService.getflows();
  }

  goToPrevPage() {
    this.router.navigate(['/page-a']);
  }

  goToNextPage() {
    this.router.navigate(['/page-c']);
  }
}
