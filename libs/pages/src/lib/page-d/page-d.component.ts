import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { SystemFlow } from '@prisma/client';
import { SystemFlowService } from '../system-flow.service';

@Component({
  selector: 'prototype-page-d',
  templateUrl: './page-d.component.html',
  styleUrls: ['./page-d.component.scss'],
})
export class PageDComponent implements OnInit {
  flow: SystemFlow | null = null;
  nextpage = '';
  constructor(public service: SystemFlowService, private router: Router) {}

  ngOnInit(): void {
    this.service.getNextPage('cl09af12g0011ql017c6ky60g').subscribe((res) => {
      this.flow = res;
      console.log('flow = ', this.flow);
    });
  }

  goToPrevPage() {
    this.router.navigate(['/page-c']);
  }

  goToFirstPage() {
    this.router.navigate(['/page-intro']);
  }
}
