import { AuthService } from './../../services/auth.service';
import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { FormGroup, FormControl, Validators, Form } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  loginform: any;
  result: any;
  registerform: any;

  ngOnInit(): void { }

  constructor(private authService: AuthService, private snackBar: MatSnackBar, private router: Router) {
    this.loginform = new FormGroup(
      {
        email: new FormControl(''),
        password: new FormControl(''),
      },
      Validators.required
    );

    this.registerform = new FormGroup(
      {
        name: new FormControl(''),
        email: new FormControl('', Validators.email),
        password: new FormControl('', Validators.minLength(6)),
      },
      Validators.required
    );
  }


  login() {
    if (this.loginform.valid) {
      this.authService
        .login(
          this.loginform.get('email').value,
          this.loginform.get('password').value)
        .then((result) => {
          if (result) {
            this.router.navigate(['/addmember']);
          } else {
            this.snackBar.open('Nem tudsz belépni', 'Vissza', { duration: 3000, });
          }
        })
        .catch((error) => {
          this.snackBar.open('Nem tudsz belépni', 'Vissza', { duration: 3000, });
        });
    }
  }

  async register() {
    if (this.registerform.valid) {
      try {
        await this.authService.signUp(
          this.registerform.get('email').value,
          this.registerform.get('password').value,
          this.registerform.get('name').value);
        this.router.navigate(['/login']);
      } catch (error) {
        this.snackBar.open('Unable to register', 'Vissza', {
          duration: 3000,
        });
      }
    }
  }

}
