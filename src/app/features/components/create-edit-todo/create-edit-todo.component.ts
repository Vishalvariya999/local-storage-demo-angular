import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Component, OnDestroy, OnInit } from '@angular/core';
import { TestService } from '../../services/test.service';
import { Router } from '@angular/router';
import { Subject, takeUntil } from 'rxjs';

@Component({
  selector: 'app-create-edit-todo',
  templateUrl: './create-edit-todo.component.html',
  styleUrls: ['./create-edit-todo.component.scss'],
})
export class CreateEditTodoComponent implements OnInit, OnDestroy{
  public frmTodo!: FormGroup;
  private destroy$ = new Subject();

  constructor(
    private fb: FormBuilder,
    private testService: TestService,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.testService.editableItem$
    .pipe(takeUntil(this.destroy$))
    .subscribe((res: any) => {
      this.initializeForm(res);
    })
  }

  ngOnDestroy(): void {
    this.destroy$.next(null);
  }

  public onSubmit() {
    if (this.frmTodo.invalid) {
      console.log('Please enter valid details');
    } 
    else {
      const randomNumber = new Date().getTime();
      const data = {
        ...this.frmTodo.value,
        id: randomNumber
      };
      if (this.frmTodo.get('id')?.value === 0) {
        this.testService.addRecoored(data);
      } else {
        this.testService.editRecord(this.frmTodo.value);
      }
      this.router.navigate(['/todo-item']);
      this.frmTodo.reset();
    }
  }

  public initializeForm(todoItem?: any) {
    this.frmTodo = this.fb.group({
      id: [todoItem?.id || 0],
      name: [todoItem?.name || null, [Validators.required]],
      desc: [todoItem?.desc || null, [Validators.required]],
      priority: [todoItem?.priority || null, [Validators.required]],
      result: [todoItem?.result || null, [Validators.required]],
    });
  }

  public onShowList() {
    this.testService.editableItem$.next(null);
  }
}
