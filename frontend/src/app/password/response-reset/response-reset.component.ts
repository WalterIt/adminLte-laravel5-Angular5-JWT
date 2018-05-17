import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { routerTransition } from './../../router.animations';
import { SnotifyService } from 'ng-snotify';

import { HttpcallService } from './../../shared/services/httpcall.service';

@Component({
  selector: 'app-response-reset',
  templateUrl: './response-reset.component.html',
  styleUrls: ['./response-reset.component.scss'],
  animations: [routerTransition()]
})
export class ResponseResetComponent implements OnInit {

    public error = [];

    public form = {
        email: null,
        password: null,
        password_confirmation: null,
        resetToken: null

      };

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private httpcall: HttpcallService,
    private notify: SnotifyService
  ) {
      //  DEBUG: notify.error('hello!');
      route.queryParams.subscribe(params => {
                                        this.form.resetToken = params['token'];
                                    });
   }

  ngOnInit() {
  }

  onSubmit() {
    this.notify.info('Processing... ', {timeout: 3000});
      this.httpcall.changePassword(this.form).subscribe(
          data => this.handleResponse(data),
          error => this.handleError(error)
      );
  }

  handleResponse(data) {

   // this.notify.success(res.error, {timeout: 0}); // timeout: 0 -> default value  2s
    this.notify.confirm('Done!, Now login with new Password', {
      buttons: [
        {text: 'Click Here',
        action: toster => {
           this.router.navigateByUrl('/login');
           this.notify.remove(toster.id);
          }
      },
      ]
    });

}

  handleError(error) {
      this.error = error.error.errors;

  }





}
