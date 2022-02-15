import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PageAComponent } from './page-a/page-a.component';
import { PageBComponent } from './page-b/page-b.component';
import { PageCComponent } from './page-c/page-c.component';
import { PageDComponent } from './page-d/page-d.component';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule, Routes } from '@angular/router';
const routes: Routes = [
  { path: 'page-a', component: PageAComponent },
  { path: 'page-b', component: PageBComponent },
  { path: 'page-c', component: PageCComponent },
  { path: 'page-d', component: PageDComponent },
  { path: '**', redirectTo: 'page-a' },
];

@NgModule({
  imports: [CommonModule, HttpClientModule, RouterModule.forChild(routes)],
  declarations: [
    PageAComponent,
    PageBComponent,
    PageCComponent,
    PageDComponent,
  ],
  exports: [PageAComponent, PageBComponent, PageCComponent, PageDComponent],
})
export class PagesModule {}