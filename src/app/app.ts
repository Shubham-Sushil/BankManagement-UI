import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
// import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  title = 'Bank Management System';
  responseMessage: string = '';

  // Inject HttpClient when server is ready:
  // constructor(private http: HttpClient) {}

  onSubmit(): void {
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
    this.responseMessage = 'Request Submitted';
  }
}