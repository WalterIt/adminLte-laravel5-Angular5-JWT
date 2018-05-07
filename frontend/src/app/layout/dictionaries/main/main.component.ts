import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent implements OnInit {
    constructor(
        private route: ActivatedRoute,
        private router: Router
    ) { }

    ngOnInit() {

        this.router.navigate(['dic-en'], {relativeTo: this.route});

    }

    showDicEn() {
        this.router.navigate(['dic-en'], {relativeTo: this.route});
    }

    showEnPt()  {
        this.router.navigate(['dic-en-pt'], {relativeTo: this.route});
    }

    showEnFr() {
        this.router.navigate(['dic-en-fr'], {relativeTo: this.route});
    }

}
