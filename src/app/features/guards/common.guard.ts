import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';
import { TestService } from '../services/test.service';

export const commonGuard: CanActivateFn = (route, state) => {
  const serv = inject(TestService);
  const router = inject(Router);
  if (!serv.login()) {
    // router.navigate(['/todo-item']);
    return true;
  } else {
    router.navigate(['/todo-item']);
    return false;
  }
};
