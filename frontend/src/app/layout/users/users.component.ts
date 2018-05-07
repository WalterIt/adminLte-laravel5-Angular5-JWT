import { Component, OnInit } from '@angular/core';
import { routerTransition } from '../../router.animations';
import { ActivatedRoute, Router } from '@angular/router';


@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss'],
  animations: [routerTransition()]
})
export class UsersComponent implements OnInit {

  constructor(
      private route: ActivatedRoute,
      private router: Router
  ) { }

  ngOnInit() {

    this.router.navigate(['members'], {relativeTo: this.route});

  }

  showMembers() {
      this.router.navigate(['members'], {relativeTo: this.route});
  }

  showPartners()  {
      this.router.navigate(['partners'], {relativeTo: this.route});
  }

  showPositions() {
    this.router.navigate(['positions'], {relativeTo: this.route});
  }

}
