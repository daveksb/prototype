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
  flow: SystemFlow | null = null;
  nextpage = '';

  constructor(public service: SystemFlowService, private router: Router) {}

  ngOnInit(): void {
    this.service.getNextPage('cl050agj20200je01hrgmwxg4').subscribe((res) => {
      this.flow = res;
      //console.log('flow = ', this.flow);
    });
  }

  goToPrevPage() {
    this.router.navigate(['/page-a']);
  }

  goToNextPage() {
    this.router.navigate([`/${this.flow?.page}`]);
  }
}
