/* tslint:disable:no-unused-variable */

import { TestBed, async } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { NotFoundComponent } from './not-found.component';

describe('NotFoundComponent', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [],
      declarations: [
        NotFoundComponent
      ],
    });
  });

  it('should create', async(() => {
    const fixture = TestBed.createComponent(NotFoundComponent);
    const ci = fixture.debugElement.componentInstance;
    expect(ci).toBeTruthy();
  }));

});
