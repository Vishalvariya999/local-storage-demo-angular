import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './features/components/login/login.component';
import { CreateEditTodoComponent } from './features/components/create-edit-todo/create-edit-todo.component';
import { TodoItemComponent } from './features/components/todo-item/todo-item.component';
import { commonGuard } from './features/guards/common.guard';

const routes: Routes = [
  {
    path: '',
    component: LoginComponent,
    canActivate: [commonGuard],
  },
  {
    path: 'todo-form',
    component: CreateEditTodoComponent,
  },
  {
    path: 'todo-item',
    component: TodoItemComponent,
  },
  {
    path: '**',
    redirectTo: '',
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
