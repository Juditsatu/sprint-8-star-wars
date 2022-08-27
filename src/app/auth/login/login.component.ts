import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { ValidatorsService } from 'src/app/shared/validators/validators.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {

  login: FormGroup = this.fb.group({
    email: ['', [Validators.required, Validators.pattern(this.validated.emailPattern)]],
    password: ['', [Validators.required, Validators.minLength(6)]]
  })

  constructor(private modalService: NgbModal,
              private fb: FormBuilder,
              private validated: ValidatorsService ) {}

  open(content: any) {
    this.modalService.open(content, { backdrop: 'static' })
  }

  get emailErrorMsg(): string {
    const errors = this.login.get('email')?.errors;

    if (errors?.['required']) {
      return 'Required';
    } else if (errors?.['pattern']) {
      return 'Please enter a valid email address.';
    } 
    
    return '';
  }

  invalidField(field: string) {
    return this.login.get(field)?.invalid &&
           this.login.get(field)?.touched;
  }

  submitForm() {
    if (this.login.valid) {
      console.log('user:', this.login.value);
    }
    this.login.markAllAsTouched();
  }

}

