import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment.prod';
import { SendEmailDto } from '../models/send-email-dto';

@Injectable({
  providedIn: 'root',
})
export class EmailService {
  apiUrl = environment.apiUrl;

  constructor(private http: HttpClient) {}

  send(dto: SendEmailDto) {
    return this.http.post(this.apiUrl + 'email', dto);
  }
}
