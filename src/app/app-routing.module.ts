import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { sharedLazyRoutes } from 'shared/routing';

const routes: Routes = [
  ...sharedLazyRoutes
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
