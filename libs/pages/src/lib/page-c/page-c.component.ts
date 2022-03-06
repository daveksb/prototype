import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { SystemFlow } from '@prisma/client';
import { SystemFlowService } from '../system-flow.service';
import { Location } from '@angular/common';

@Component({
  selector: 'prototype-page-c',
  templateUrl: './page-c.component.html',
  styleUrls: ['./page-c.component.scss'],
})
export class PageCComponent implements OnInit {
  flow: SystemFlow | null = null;
  nextpage = '';

  constructor(
    public service: SystemFlowService,
    private router: Router,
    private location: Location
  ) {}

  ngOnInit(): void {
    this.service.getNextPage('cl050agj20202je01u2fzziej').subscribe((res) => {
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
