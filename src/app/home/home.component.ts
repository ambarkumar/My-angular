import { Component } from '@angular/core';
import {AuthDetailService} from '../services/auth-detail.service';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})

export class HomeComponent {
  AuthDetailService: any;
  response:any;
  users:any;
  error: any;
  constructor(private authDetailService: AuthDetailService){}







  
}
