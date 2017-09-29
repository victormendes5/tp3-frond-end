import { Component, OnInit } from '@angular/core';
import { CategoryService } from '../../services/category.service';
import { TaskService } from '../../services/task.service';
import 'rxjs/add/operator/finally';

@Component({
  selector: 'app-home2',
  templateUrl: './home2.component.html',
  styleUrls: ['./home2.component.css']
})

export class Home2Component implements OnInit {

  categories = [];
  tasks = [];
  loading = true;
  is_checked: boolean;

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

  isChecked() {
    this.is_checked = !this.is_checked;
  }

}
