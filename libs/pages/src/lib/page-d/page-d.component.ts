import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Service, SystemFlow } from '@prisma/client';
import { SystemFlowService } from '../system-flow.service';
import { Location } from '@angular/common';
const flowId = 'cl09af12g0011ql017c6ky60g';

@Component({
  selector: 'prototype-page-d',
  templateUrl: './page-d.component.html',
  styleUrls: ['./page-d.component.scss'],
})
export class PageDComponent implements OnInit {
  flow: SystemFlow | null = null;
  nextpage = '';
  serviceData: Service | null = null;

  constructor(
    public service: SystemFlowService,
    private router: Router,
    private location: Location
  ) {}

  ngOnInit(): void {
    this.service.getNextPage(flowId).subscribe((res) => {
      this.flow = res;
    });

    this.service.getCurrentPageService(flowId).subscribe((res) => {
      this.serviceData = res;
      console.log('service status = ', this.serviceData.details);
    });
  }

  goToPrevPage() {
    this.location.back();
  }

  goToNextPage() {
    this.router.navigate([`/${this.flow?.page}`]);
  }
}
