import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { Router } from '@angular/router';

import { AppService, AuthService } from '../../core/services';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  constructor(
    public appService: AppService,
    private router: Router,
    private authService: AuthService,
    private toastService: ToastrService
  ) { }

  ngOnInit() {

    if(!this.appService.user){
      this.router.navigateByUrl("/login")
    }
  }

}
