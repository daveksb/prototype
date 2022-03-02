import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { SystemFlow } from '@prisma/client';
import { Observable } from 'rxjs';
import { SystemFlowService } from '../system-flow.service';

@Component({
  selector: 'prototype-page-d',
  templateUrl: './page-d.component.html',
  styleUrls: ['./page-d.component.scss'],
})
export class PageDComponent implements OnInit {
  public $flows: Observable<SystemFlow[]> | null = null;

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
