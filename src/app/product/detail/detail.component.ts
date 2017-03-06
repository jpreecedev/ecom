import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.scss']
})
export class DetailComponent implements OnInit {

  public description: String;

  constructor(route: ActivatedRoute) {
    this.description = route.snapshot.params.description;
  }

  ngOnInit() {
  }

}
