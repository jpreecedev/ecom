import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  encapsulation: ViewEncapsulation.None,
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.scss']
})
export class DetailComponent implements OnInit {

  public description: String;

  constructor(public router: Router, route: ActivatedRoute) {
    this.description = route.snapshot.params.description;
  }

  ngOnInit() {
    if (!this.description) {
      this.router.navigate(['../']);
    }
  }

}
