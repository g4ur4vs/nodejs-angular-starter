import { ApiService, ToastyHelperService } from './../../core/services';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  username: string;
  password: string;

  constructor(
    private apiService: ApiService,
    private toastyService: ToastyHelperService
  ) {}

  ngOnInit() {}

  onLoginClick() {
    this.apiService.login(this.username, this.password).subscribe(
      result => {
        this.toastyService.showSuccess(
          `Login successfully`,
          `You are now logged in`
        );
      },
      error => {}
    );
  }
}