import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { Response } from '@angular/http';

import { CategoriesService } from './categories.service';

@Component({
  selector: 'app-categories',
  encapsulation: ViewEncapsulation.None,
  templateUrl: './categories.component.html',
  styleUrls: ['./categories.component.scss']
})
export class CategoriesComponent implements OnInit {

  public categories: any;

  constructor(public service: CategoriesService) { }

  ngOnInit() {
    this.service.getCategories().subscribe((response: Response) => {
      this.categories = response.json();
    })
  }

}
