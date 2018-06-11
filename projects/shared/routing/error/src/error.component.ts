import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { map, shareReplay } from 'rxjs/operators';

@Component({
  selector: 'app-error',
  templateUrl: './error.component.html',
  styleUrls: ['./error.component.scss']
})
export class ErrorComponent implements OnInit {

  public error: Observable<any>;

  constructor(
    private route: ActivatedRoute
  ) { }

  public ngOnInit(): void {
    this.error = this.route.data.pipe(map(data => data.error), shareReplay());
  }

}
