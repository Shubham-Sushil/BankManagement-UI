import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
// import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  title = 'Bank Management System';
  responseMessage: string = '';
  userForm: FormGroup;
  isSubmitted: boolean = false;

  constructor(private fb: FormBuilder) {
    this.userForm = this.fb.group({
      name: ['', Validators.required],
      dob: ['']
    });
  }

  // Inject HttpClient when server is ready:
  // constructor(private http: HttpClient) {}

  onSubmit(): void {
    this.isSubmitted = true;

    if (this.userForm.invalid) {
      this.responseMessage = '';
      return;
    }

    // =========================================================================
    // PLACEHOLDER: Java Server API Endpoint
    // =========================================================================
    /*
    const apiEndpoint = 'http://localhost:8080/api/v1/bank/submit';
    this.http.post<any>(apiEndpoint, {}).subscribe({
      next: (data) => {
        this.responseMessage = data.message;
      },
      error: (err) => {
        this.responseMessage = 'Failed to connect to backend server.';
      }
    });
    */

    // Dummy response for now
    const { name, dob } = this.userForm.value;
    const formattedDob = dob ? dob : 'N/A';
    this.responseMessage = `Request Submitted: ${name}, ${formattedDob}`;
  }
}