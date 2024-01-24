import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';


@Component({
  selector: 'app-form',
  standalone: true,
  imports: [FormsModule, HttpClientModule],
  templateUrl: './form.component.html',
  styleUrl: './form.component.css'
})
export class FormComponent {

  registerObj: Register;

  constructor(private http: HttpClient) {
    this.registerObj = new Register();
  }

  onSignUp = () => {
    debugger;
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      // Add any authentication headers if required
    });
    try {
      this.http.post('http://localhost:9096/user/register', this.registerObj, { headers }).subscribe((res: any) => {
        console.log(res);
        alert("SignUp Success...")
      })
    }
    catch (error) {
      console.error(error);
    }

  }

}

export class Register {

  Name: string;
  Email: string;
  UserName: string;
  password: string;

  constructor() {
    this.Name = '';
    this.Email = '';
    this.UserName = '';
    this.password = '';
  }
}
