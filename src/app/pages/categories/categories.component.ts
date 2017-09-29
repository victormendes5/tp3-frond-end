import { Component, OnInit } from '@angular/core';
import { CategoryService } from '../../services/category.service';

import 'rxjs/add/operator/finally';

@Component({
  selector: 'app-categories',
  templateUrl: './categories.component.html',
  styleUrls: ['./categories.component.css']
})

export class CategoriesComponent implements OnInit {

  data = [];
  loading = true;

  constructor(private categoryService: CategoryService) {
  }

  ngOnInit() {
    this.categoryService.getData()
      .finally(() => this.loading = false)
      .subscribe((data) => {
        this.data = data;
      });
  }

  add(event, value) {
    if (this.data.indexOf(value) === -1) {
      if (value !== '') {
        console.log(value);
        this.data.push(value);
      }
    }
  }

}
