import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { SystemFlow } from '@prisma/client';
import { SystemFlowService } from '../system-flow.service';

@Component({
  selector: 'prototype-page-c',
  templateUrl: './page-c.component.html',
  styleUrls: ['./page-c.component.scss'],
})
export class PageCComponent implements OnInit {
  flow: SystemFlow | null = null;

  constructor(public service: SystemFlowService, private router: Router) {}

  ngOnInit(): void {
    this.service.getFlow('cl050agj20202je01u2fzziej').subscribe((res) => {
      this.flow = res;
      console.log('flow = ', this.flow);
    });
  }

  goToPrevPage() {
    this.router.navigate(['/page-b']);
  }

  goToNextPage() {
    this.router.navigate(['/page-d']);
  }
}
