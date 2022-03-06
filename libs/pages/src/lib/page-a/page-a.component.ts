import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { SystemFlow } from '@prisma/client';
import { Location } from '@angular/common';
import { SystemFlowService } from '../system-flow.service';

@Component({
  selector: 'prototype-page-a',
  templateUrl: './page-a.component.html',
  styleUrls: ['./page-a.component.scss'],
})
export class PageAComponent implements OnInit {
  flow: SystemFlow | null = null;
  nextpage = '';

  constructor(
    public service: SystemFlowService,
    private router: Router,
    private location: Location
  ) {}

  ngOnInit(): void {
    this.service.getNextPage('cl050agj20198je01f73cunbi').subscribe((res) => {
      this.flow = res;
      //console.log('flow = ', this.flow);
    });
  }

  goToPrevPage() {
    this.location.back();
  }

  goToNextPage() {
    this.router.navigate([`/${this.flow?.page}`]);
  }
}
