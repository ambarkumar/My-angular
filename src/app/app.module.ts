import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { NgbCollapseModule, NgbModule, NgbNavModule } from '@ng-bootstrap/ng-bootstrap';
import { AppRoutingModule } from './app-routing.module';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { ToastrModule } from 'ngx-toastr';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HomeComponent } from './home/home.component';
import { AuthenticateModule } from './authenticate/authenticate.module';
import { ProfilePageComponent } from './profile-page/profile-page.component';
import { HttpClientModule } from '@angular/common/http'; 

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    HomeComponent,
    ProfilePageComponent,
    
  ],
  imports: [
    AuthenticateModule,
    AppRoutingModule,
    BrowserModule,
    BrowserModule.withServerTransition({ appId: 'serverApp' }),
    BrowserModule,
    ReactiveFormsModule,
    FormsModule,
    NgbModule,
    NgbNavModule,
    NgbCollapseModule,
    BrowserAnimationsModule,
    HttpClientModule,
    ToastrModule.forRoot(),
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
