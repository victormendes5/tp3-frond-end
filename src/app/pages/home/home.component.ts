import { Component, OnInit } from '@angular/core';
import { CategoryService } from '../../services/category.service';
import { TaskService } from '../../services/task.service';

import 'rxjs/add/operator/finally';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})

export class HomeComponent implements OnInit {

  categories = [];
  tasks = [];
  loading = true;

  constructor(private categoryService: CategoryService,
              private taskService: TaskService) {
  }

  ngOnInit() {
    this.categoryService.getData()
      .finally(() => this.loading = false)
      .subscribe((data) => {
        this.categories = data;
      });
    this.taskService.getData()
      .finally(() => this.loading = false)
      .subscribe((data) => {
        this.tasks = data;
      });
  }

}
