import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { CommonModule } from '@angular/common';
import { AppRoutingModule } from '../app-routing.module';
import { AuthenticateRoutingModule } from './authenticate-routing.module';
import { LoginComponent } from './login/login.component';
import { NgbCollapseModule, NgbModule, NgbNavModule } from '@ng-bootstrap/ng-bootstrap';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AuthRoutingModule } from '../auth/auth-routing.module';
import { SignupComponent } from './signup/signup.component';
import { RecoverPasswordComponent } from './recover-password/recover-password.component';
import { HttpClientModule } from '@angular/common/http';


@NgModule({
  declarations: [
    LoginComponent,
    SignupComponent,
    RecoverPasswordComponent
  ],
  imports: [
    AppRoutingModule,
    CommonModule,
    AuthenticateRoutingModule,
    AuthRoutingModule,
    NgbModule,
    NgbNavModule,
    NgbCollapseModule,
    ReactiveFormsModule,
    FormsModule,
    BrowserModule,
    HttpClientModule
  ]
})
export class AuthenticateModule { }
