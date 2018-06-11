import { NgModule } from '@angular/core';
import { Routes } from '@angular/router';

export const sharedLazyRoutes: Routes = [
  {
    path: 'error', // lazy load
    loadChildren: 'shared/routing/error#ErrorModule'
  },
  {
    path: '**', // lazy load
    loadChildren: 'shared/routing/not-found#NotFoundModule'
  }
];

/**
 * Provides routes common in all apps
 */
@NgModule({
})
export class SharedRoutingModule { }
