import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

import { AuthService } from '../services/auth.service';
import { ValidatorsService } from 'src/app/shared/validators/validators.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})

export class LoginComponent {

  loginForm: FormGroup = this.fb.group({
    email: ['', [Validators.required, Validators.pattern(this.validated.emailPattern)]],
    password: ['', [Validators.required, Validators.minLength(6)]]
  })

  get email() {
    return this.loginForm.get('email')?.value;
  }

  get password() {
    return this.loginForm.get('password')?.value;
  }

  constructor(private modalService: NgbModal,
              private fb: FormBuilder,
              private validated: ValidatorsService,
              private authService: AuthService,
              private router: Router ) {}

  open(content: any) {
    this.modalService.open(content, { backdrop: 'static' })
  }

  get emailErrorMsg(): string {
    const errors = this.loginForm.get('email')?.errors;

    if (errors?.['required']) {
      return 'Required';
    } else if (errors?.['pattern']) {
      return 'Please enter a valid email address.';
    } 
    
    return '';
  }

  invalidField(field: string) {
    return this.loginForm.get(field)?.invalid &&
           this.loginForm.get(field)?.touched;
  }

  submitForm() {

    if (this.loginForm.valid) {
      //user 'token' as id
      this.authService.login()
        .subscribe(res => {
          console.log(res)

          if (res.id) {
            this.router.navigate(['./starships'])
          }
          
        })
      //close modal once form is submitted
      this.modalService.dismissAll()
    }

    this.loginForm.markAllAsTouched();
  }

}