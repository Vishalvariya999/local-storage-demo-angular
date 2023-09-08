import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Component } from '@angular/core';
import { TestService } from '../../services/test.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-create-edit-todo',
  templateUrl: './create-edit-todo.component.html',
  styleUrls: ['./create-edit-todo.component.scss'],
})
export class CreateEditTodoComponent {
  public frmTodo!: FormGroup;
  constructor(
    private fb: FormBuilder,
    private testService: TestService,
    private router: Router
  ) {
    this.frmTodo = this.fb.group({
      name: ['', Validators.required],
      desc: ['', Validators.required],
      priority: ['', Validators.required],
      result: ['', Validators.required],
    });
  }

  public onSubmit() {
    if (this.frmTodo.invalid) {
      console.log('Please enter valid details');
    } else {
      const randomNumber = new Date().getTime();
      const data = {
        id: randomNumber,
        ...this.frmTodo.value,
      };
      console.log('data', data);
      this.testService.addRecoored(data);
      this.router.navigate(['/todo-item']);
      this.frmTodo.reset();
    }
  }
}
