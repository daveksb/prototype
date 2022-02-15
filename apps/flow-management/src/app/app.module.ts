import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Routes } from '@angular/router';
import { PagesModule } from '@prototype/pages';

import { AppComponent } from './app.component';

const routes: Routes = [
  {
    path: '',
    children: [
      {
        path: 'system',
        loadChildren: () =>
          import('@prototype/pages').then((m) => m.PagesModule),
      },
    ],
  },
  { path: '**', redirectTo: 'system' },
];
@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, PagesModule, RouterModule.forRoot(routes)],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
