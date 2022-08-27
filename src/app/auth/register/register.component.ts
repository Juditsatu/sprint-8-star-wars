import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ModalDismissReasons, NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { ValidatorsService } from '../../shared/validators/validators.service';
import { EmailValidatorService } from '../../shared/validators/email-validator.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss'],
})
export class RegisterComponent {
  closeResult = '';
  showPassword: boolean = false;

  register: FormGroup = this.fb.group({
    firstName: ['Leia', Validators.required],
    lastName: ['Organa', Validators.required],
    email: ['princessleia@gmail.com', [Validators.required, Validators.pattern(this.validated.emailPattern)], [ this.emailValidator ]],
    password: ['Alderaan56-3', [Validators.required, Validators.minLength(6)]],
    terms: [false, Validators.required]
  })

  constructor(private modalService: NgbModal, 
              private fb: FormBuilder, 
              private validated: ValidatorsService,
              private emailValidator: EmailValidatorService) {}

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
      .open(content, { ariaLabelledBy: 'modal-basic-title' })
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
    const errors = this.register.get('email')?.errors;

    if (errors?.['required']) {
      return 'Please enter your email address.';
    } else if (errors?.['pattern']) {
      return 'Please enter a valid email address.';
    } else if (errors?.['emailTaken']) {
      return 'It looks like that email has already been used to create an account at Disney, ESPN, Marvel, or ABC. If this is your email address, just sign in to your account.';
    }
    
    return '';
  }

  get passwordErrorMsg(): string {
    const errors = this.register.get('password')?.errors;

    if (errors?.['required']) {
      return 'Please enter a password.';
    } else if (errors?.['minLength']) {
      return 'The password is too short.';
    } 
    
    return '';
  }

  invalidField(field: string) {
    return this.register.get(field)?.invalid &&
           this.register.get(field)?.touched;
  }

  toggleShow() {
    this.showPassword = !this.showPassword;
    console.log( this.showPassword )
  }

  submitForm() {
    console.log('new user:',this.register.value);
    localStorage.setItem('form-data', JSON.stringify({...this.register.value}));
    console.log(localStorage.getItem('form-data'))
    this.register.markAllAsTouched();
  }
}
