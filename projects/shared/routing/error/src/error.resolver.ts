import { Injectable } from '@angular/core';
import { Resolve, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { catchError } from 'rxjs/operators';

@Injectable()
export class ErrorResolver implements Resolve<any> {

  constructor(
    private http: HttpClient
  ) { }

  public resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<any> | any {
    const errorId = route.queryParams.errorId;
    const error = route.queryParams.error;
    if (!!errorId) {
      return this.http.get<any>(`/api/error/${errorId}`)
        // if bad error id stil show error page
        .pipe(catchError(() => of(null)));
    } else if (!!error) {
      return JSON.parse(error);
    } else {
      return null;
    }
  }

}
