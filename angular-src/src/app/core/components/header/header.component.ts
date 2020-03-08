import { Component, OnInit } from '@angular/core';
import { AppService, AuthService } from '../../services';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  constructor(public appService: AppService,
    public authService: AuthService,
    public router: Router,
    private toastService: ToastrService) { }

  ngOnInit() {
  }

  logout() {
    this.authService.logout().then(() => {
      this.router.navigateByUrl('/login');
      this.toastService.success(`You are logged out`, `You have succesfully logged out!`);
    });
  }

}
