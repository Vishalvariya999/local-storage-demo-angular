import { Component } from '@angular/core';
import { TestService } from '../../services/test.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-todo-item',
  templateUrl: './todo-item.component.html',
  styleUrls: ['./todo-item.component.scss'],
})
export class TodoItemComponent {
  public arrays: any = [];
  constructor(private testService: TestService, private router: Router) {
    const localStorageData = localStorage.getItem('TodoData');
    this.arrays = localStorageData !== null ? JSON.parse(localStorageData) : [];
    console.log('this.arrays', this.arrays);
  }

  public onChange() {
    this.router.navigate(['/todo-form']);
  }

  public onDelete(id: number) {
    console.log('id', id);
    this.testService.deleteRecored(id);
  }
}
