import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AngularFireModule } from 'angularfire2';
import { AngularFireDatabaseModule } from 'angularfire2/database';

import { AppRoutingModule } from './app.route';

import { CategoryService } from './services/category.service';
import { TaskService } from './services/task.service';

import { AppComponent } from './app.component';
import { CategoriesComponent } from './pages/categories/categories.component';
import { HomeComponent } from './pages/home/home.component';
import { TasksComponent } from './pages/tasks/tasks.component';
import { Home2Component } from './pages/home2/home2.component';

export const firebaseConfig = {
  apiKey: 'AIzaSyB5XW-4EE5MRx9ik5fJ65W0rejf_KGllcQ',
  authDomain: 'tp31-e1ae8.firebaseapp.com',
  databaseURL: 'https://tp31-e1ae8.firebaseio.com',
  storageBucket: '',
  messagingSenderId: '336604931973'
};

@NgModule({
  declarations: [
    AppComponent,
    CategoriesComponent,
    HomeComponent,
    TasksComponent,
    Home2Component,
  ],
  imports: [
    HttpModule,
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    AngularFireModule.initializeApp(firebaseConfig),
    AngularFireDatabaseModule
  ],
  providers: [
    CategoryService,
    TaskService
  ],
  bootstrap: [ AppComponent ]
})
export class AppModule { }
