import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { SystemFlow } from '@prisma/client';

import { SystemFlowService } from '../system-flow.service';

@Component({
  selector: 'prototype-page-a',
  templateUrl: './page-a.component.html',
  styleUrls: ['./page-a.component.scss'],
})
export class PageAComponent implements OnInit {
  flow: SystemFlow | null = null;

  constructor(public service: SystemFlowService, private router: Router) {}

  ngOnInit(): void {
    this.service.getFlow('cl050agj20198je01f73cunbi').subscribe((res) => {
      this.flow = res;
      console.log('flow = ', this.flow);
    });
  }

  goToPrevPage() {
    this.router.navigate(['/page-intro']);
  }

  goToNextPage() {
    this.router.navigate(['/page-b']);
  }
}
