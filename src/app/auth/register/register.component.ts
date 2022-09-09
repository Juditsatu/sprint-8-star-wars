import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

import { ModalDismissReasons, NgbModal } from '@ng-bootstrap/ng-bootstrap';

import { ValidatorsService } from '../../shared/validators/validators.service';
import { EmailValidatorService } from '../../shared/validators/email-validator.service';

import { AuthService } from '../services/auth.service';
import { Router } from '@angular/router';
import { User } from '../interface/user.interface';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss'],
})
export class RegisterComponent {
  closeResult = '';
  showPassword: boolean = false;

  registerForm: FormGroup = this.fb.group({
    firstName: ['Leia', Validators.required],
    lastName: ['Organa', Validators.required],
    email: ['princessleia@gmail.com', [Validators.required, Validators.pattern(this.validated.emailPattern)], [ this.emailValidator ]],
    password: ['Alderaan56-3', [Validators.required, Validators.minLength(6)]],
    terms: [false, Validators.required]
  })

  newUser: User = {
    first_name: this.registerForm.value.firstName,
    last_name: this.registerForm.value.lastName,
    email: this.registerForm.value.email,
    password: this.registerForm.value.password,
    terms: this.registerForm.value.terms,
  };

  constructor(private modalService: NgbModal, 
              private fb: FormBuilder, 
              private validated: ValidatorsService,
              private emailValidator: EmailValidatorService,
              private authService: AuthService,
              private router: Router ) {}

  private getDismissReason(reason: any): string {
    if (reason === ModalDismissReasons.ESC) {
      return 'by pressing ESC';
    } else if (reason === ModalDismissReasons.BACKDROP_CLICK) {
      return 'by clicking on a backdrop';
    } else {
      return `with: ${reason}`;
    }
  }

  open(content: any) {
    this.modalService
      .open(content, { backdrop: 'static' })
      .result.then(
        (result) => {
          this.closeResult = `Closed with: ${result}`;
        },
        (reason) => {
          this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
        }
      );
  }

  get emailErrorMsg(): string {
    const errors = this.registerForm.get('email')?.errors;

    if (errors?.['required']) {
      return 'Please enter your email address.';
    } else if (errors?.['pattern']) {
      return 'Please enter a valid email address.';
    } else if (errors?.['emailTaken']) {
      return `It looks like that email has already been used to create an account at Disney, ESPN, Marvel, or ABC. If this is your email address, just sign in to your account.`;
    }
    
    return '';
  }

  get passwordErrorMsg(): string {
    const errors = this.registerForm.get('password')?.errors;

    if (errors?.['required']) {
      return 'Please enter a password.';
    } else if (errors?.['minlength']) {
      return 'The password is too short.';
    } 
    
    return '';
  }

  invalidField(field: string) {
    return this.registerForm.get(field)?.invalid &&
           this.registerForm.get(field)?.touched;
  }

  toggleShow() {
    this.showPassword = !this.showPassword;
  }

  submitForm() {

    if (this.registerForm.valid) {

      this.authService.register(this.newUser)
        .subscribe(user => {
          console.log(user)

          if (user.id) {
            this.router.navigate(['./starships'])
          }
        
        })
        
      this.modalService.dismissAll()
    }

    this.registerForm.markAllAsTouched();
  }

}
