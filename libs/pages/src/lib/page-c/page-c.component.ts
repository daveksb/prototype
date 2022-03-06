import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Service, SystemFlow } from '@prisma/client';
import { SystemFlowService } from '../system-flow.service';
import { Location } from '@angular/common';
const flowId = 'cl050agj20202je01u2fzziej';
@Component({
  selector: 'prototype-page-c',
  templateUrl: './page-c.component.html',
  styleUrls: ['./page-c.component.scss'],
})
export class PageCComponent implements OnInit {
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
      //console.log('flow = ', this.flow);
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
