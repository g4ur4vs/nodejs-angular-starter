import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { Router } from '@angular/router';

import { AppService, AuthService } from '../../core/services';
import { UserProfile } from '../../../../../shared/models';
import { LocalStorageService } from '../../core/services/storage.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  public user: UserProfile;

  constructor(
    public appService: AppService,
    private router: Router,
    private authService: AuthService,
    private toastService: ToastrService,
    private storageService: LocalStorageService
  ) { }

  ngOnInit() {

    this.user = this.storageService.getFromLocalStorage('user');

    if (!this.user.firstName) {
      this.toastService.error('Session Expired', 'Please Re-Login');
      this.router.navigateByUrl("/login");
    } else {

      this.authService.user = this.user;
      console.log(this.user);
    }
  }

}
