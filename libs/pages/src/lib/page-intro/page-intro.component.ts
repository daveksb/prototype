import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { SystemFlow } from '@prisma/client';
import { Observable } from 'rxjs';
import { SystemFlowService } from '../system-flow.service';

@Component({
  selector: 'prototype-page-intro',
  templateUrl: './page-intro.component.html',
  styleUrls: ['./page-intro.component.scss'],
})
export class PageIntroComponent implements OnInit {
  public $flows: Observable<SystemFlow[]> | null = null;

  constructor(public service: SystemFlowService, private router: Router) {}

  ngOnInit(): void {
    this.$flows = this.service.getflows();
  }

  goToNextPage() {
    this.router.navigate(['/page-a']);
  }
}
