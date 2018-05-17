import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { routerTransition } from '../../router.animations';
import { SnotifyService } from 'ng-snotify';

import { HttpcallService } from './../../shared/services/httpcall.service';

@Component({
  selector: 'app-request-reset',
  templateUrl: './request-reset.component.html',
  styleUrls: ['./request-reset.component.scss'],
  animations: [routerTransition()]
})
export class RequestResetComponent implements OnInit {
    public form = {
        email: null
    };

  constructor(
      private httcall: HttpcallService,
      private notify: SnotifyService
    ) { }

  ngOnInit() {
  }

  onSubmit() {
      this.notify.info('Processing... ', {timeout: 3000});
      this.httcall.sendPasswordResetLink(this.form).subscribe(
          data => this.handleResponse(data),
          error => this.notify.error(error.error.error)
      );
  }

  handleResponse(res) {
      this.notify.success(res.data, {timeout: 0}); // timeout: 0 -> default value  2s
      this.form.email = null;

  }

}
