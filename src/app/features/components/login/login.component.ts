import { Component } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent {
  public frmLogin!: FormGroup;
  constructor(private fb: FormBuilder, private router: Router) {
    this.frmLogin = this.fb.group({
      email: ['', Validators.required],
      password: ['', Validators.required],
    });
  }

  public onLogin() {
    if (this.frmLogin.invalid) {
      this.frmLogin.markAllAsTouched();
      console.log('Please fill details proper');
    } else {
      const data = {
        ...this.frmLogin.value,
        isLogin: true,
      };
      localStorage.setItem('User-detals', JSON.stringify(data));
      this.router.navigate(['/todo-item']);
      this.frmLogin.reset();
    }
  }

  get fControl() {
    return this.frmLogin.controls;
  }
}
