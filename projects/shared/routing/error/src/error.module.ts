import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { Routes, RouterModule } from '@angular/router';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { FlexLayoutModule } from '@angular/flex-layout';
import { ErrorComponent } from './error.component';
import { ErrorResolver } from './error.resolver';

export const routes: Routes = [
  {
    path: '',
    component: ErrorComponent,
    resolve: {
      error: ErrorResolver
    }
  }
];

@NgModule({
  imports: [
    CommonModule,
    HttpClientModule,
    RouterModule.forChild(routes),
    MatToolbarModule,
    MatCardModule,
    MatIconModule,
    MatButtonModule,
    FlexLayoutModule
  ],
  declarations: [
    ErrorComponent
  ],
  providers: [
    ErrorResolver
  ],
  exports: [
    RouterModule
  ]
})
export class ErrorModule { }
