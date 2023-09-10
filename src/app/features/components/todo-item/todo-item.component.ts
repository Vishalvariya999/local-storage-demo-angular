import { Component, OnInit } from '@angular/core';
import { TestService } from '../../services/test.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-todo-item',
  templateUrl: './todo-item.component.html',
  styleUrls: ['./todo-item.component.scss'],
})
export class TodoItemComponent implements OnInit {
  public arrays: any = [];
  private deleteId!: number;
  constructor(private testService: TestService, private router: Router) {}

  ngOnInit(): void {
    this.getData();
  }

  private getData() {
    const localStorageData = localStorage.getItem('TodoData');
    this.arrays = localStorageData !== null ? JSON.parse(localStorageData) : [];
  }

  public onEdit(data: any) {
    this.testService.editRecored(data);
    this.router.navigate(['/todo-form']);
  }

  public sendId(id: number) {
    this.deleteId = id;
  }

  public onDelete() {
    this.testService.deleteRecored(this.deleteId);
    this.getData();
  }
}
