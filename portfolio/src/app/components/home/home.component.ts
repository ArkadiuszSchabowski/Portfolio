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
import { ToastrService } from 'ngx-toastr';
import { finalize } from 'rxjs';

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
  isSending = false;

  constructor(
    private fb: FormBuilder,
    private emailService: EmailService,
    private toastr: ToastrService,
  ) {
    this.form = this.fb.group({
      from: ['', [Validators.required, Validators.email]],
      subject: [
        '',
        [
          Validators.required,
          Validators.minLength(5),
          Validators.maxLength(100),
        ],
      ],
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
    Object.values(this.form.controls).forEach((control) => {
      control.updateValueAndValidity();
    });

    if (this.form.invalid || this.isSending) {
      this.form.markAllAsTouched();
      return;
    }

    this.isSending = true;

    const dto: SendEmailDto = {
      from: this.form.get('from')!.value,
      subject: this.form.get('subject')!.value,
      message: this.form.get('message')!.value,
    };

    this.emailService
      .send(dto)
      .pipe(finalize(() => (this.isSending = false)))
      .subscribe({
        next: () => {
          this.toastr.success('Your message has been sent successfully.');
          this.form.reset();

          Object.keys(this.form.controls).forEach((key) => {
            this.form.get(key)?.setErrors(null);
            this.form.get(key)?.markAsPristine();
            this.form.get(key)?.markAsUntouched();
          });

          this.form.updateValueAndValidity();
        },
        error: () => {
          this.toastr.error(
            'Failed to send the message. Please try again later.',
          );
        },
      });
  }
}
