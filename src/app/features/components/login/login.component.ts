import { Component } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent {
  public frmLogin!: FormGroup;
  constructor(private fb: FormBuilder) {
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
      console.log('this.frmLogin.value', this.frmLogin.value);
      const data = {
        ...this.frmLogin.value,
        isLogin: true,
      };
      console.log('data', data);
      localStorage.setItem('User-detals', JSON.stringify(data));
      this.frmLogin.reset();
    }
  }

  get fControl() {
    return this.frmLogin.controls;
  }
}
