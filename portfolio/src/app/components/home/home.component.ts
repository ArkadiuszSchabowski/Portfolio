import { Component } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';
import {
  ReactiveFormsModule,
  FormBuilder,
  Validators,
  FormGroup,
} from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatCardModule } from '@angular/material/card';
import { CommonModule } from '@angular/common';
import { EmailService } from '../../_services/email.service';
import { SendEmailDto } from '../../models/send-email-dto';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    CommonModule,
    MatCardModule,
    MatButtonModule,
    MatFormFieldModule,
    MatInputModule,
    ReactiveFormsModule,
  ],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
})
export class HomeComponent {
  form: FormGroup;

  constructor(private fb: FormBuilder, private emailService: EmailService) {
    this.form = this.fb.group({
      from: ['', [Validators.required, Validators.email]],
      subject: ['',
        [
          Validators.required,
          Validators.minLength(5),
          Validators.maxLength(100),
        ]],
      message: [
        '',
        [
          Validators.required,
          Validators.minLength(10),
          Validators.maxLength(1000),
        ],
      ],
    });
  }

  sendEmail() {
    if (this.form.invalid) {
      this.form.markAllAsTouched();
      return;
    }

      let dto: SendEmailDto = {
      from: this.form.get('from')!.value,
      subject: this.form.get('subject')!.value,
      message: this.form.get('message')!.value,
    };

    this.emailService.send(dto).subscribe({
        next: (response) => {
          console.log(response)
        },
        error: error => console.log(error)
      });
  }
}
