import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Service, SystemFlow } from '@prisma/client';
import { Location } from '@angular/common';
import { SystemFlowService } from '../system-flow.service';

const flowId = 'cl050agj20198je01f73cunbi';

@Component({
  selector: 'prototype-page-a',
  templateUrl: './page-a.component.html',
  styleUrls: ['./page-a.component.scss'],
})
export class PageAComponent implements OnInit {
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
