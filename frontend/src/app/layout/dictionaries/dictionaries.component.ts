import { Component, OnInit } from '@angular/core';
import { routerTransition } from '../../router.animations';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-dictionaries',
  templateUrl: './dictionaries.component.html',
  styleUrls: ['./dictionaries.component.scss'],
  animations: [routerTransition()]
})
export class DictionariesComponent implements OnInit {

    constructor(
        private route: ActivatedRoute,
        private router: Router
    ) { }

    ngOnInit() {

        this.router.navigate(['english'], {relativeTo: this.route});

    }

    showDicEn() {
        this.router.navigate(['english'], {relativeTo: this.route});
    }

    showEnPt()  {
        this.router.navigate(['en-pt'], {relativeTo: this.route});
    }

    showEnFr() {
        this.router.navigate(['en-fr'], {relativeTo: this.route});
    }

}
