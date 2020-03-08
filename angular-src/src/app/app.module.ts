import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Route, RouterModule } from '@angular/router';
import { NgtUniversalModule } from '@ng-toolkit/universal';
import { AuthGuardService } from '@services';

import { AppComponent } from './app.component';
import { ExamplePageComponent } from './components/example-page/example-page.component';
import { HomeComponent } from './components/home/home.component';
import { LoginComponent } from './components/login/login.component';
import { UserPageComponent } from './components/user-page/user-page.component';
import { CoreModule } from './core/core.module';
import { SharedModule } from './shared/shared.module';
import { RegisterComponent } from './components/register/register.component';
import { StorageServiceModule} from 'ngx-webstorage-service';
import { LocalStorageService } from './core/services/storage.service';

const routes: Route[] = [
  {
    path: '',
    pathMatch: 'full',
    component: HomeComponent
  },
  {
    path: 'login',
    component: LoginComponent
  },
  {
    path: 'example',
    pathMatch: 'full',
    component: ExamplePageComponent
  },
  {
    path: 'register',
    component: RegisterComponent
  },
  {
    path: 'user',
    component: UserPageComponent,
    canActivate: [AuthGuardService]
  },
  {
    path: 'admin',
    component: UserPageComponent,
    canActivate: [AuthGuardService],
    data: { roles: ['admin'] }
  }
];

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ExamplePageComponent,
    LoginComponent,
    UserPageComponent,
    RegisterComponent
  ],
  imports: [
    CommonModule,
    StorageServiceModule,
    NgtUniversalModule,
    SharedModule,
    CoreModule,
    RouterModule.forRoot(routes, { enableTracing: false, initialNavigation: 'enabled' }),
    FormsModule
  ],
  providers: [LocalStorageService]
})
export class AppModule {}
