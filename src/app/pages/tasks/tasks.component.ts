import { Component, OnInit } from '@angular/core';
import { CategoryService } from '../../services/category.service';
import { TaskService } from '../../services/task.service';
import 'rxjs/add/operator/finally';

@Component({
  selector: 'app-tasks',
  templateUrl: './tasks.component.html',
  styleUrls: ['./tasks.component.css']
})

export class TasksComponent implements OnInit {

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
        // data.forEach((entry) => {
        //   console.log(entry.categoria);
        // });
      });
  }

  validate(newTask, category) {
    if (this.tasks.filter(task => task.nome === newTask && task.categoria === category).length > 0) {
      console.log('contém o elemento');
    } else {
      this.tasks.push({
        nome: newTask,
        categoria: category,
        feito: false
      });
      console.log('Não contém o elemento');
    }
  }

  add(event, newTask, category) {
    if (newTask !== '') {
      this.validate(newTask, category);
    }
  }

}
