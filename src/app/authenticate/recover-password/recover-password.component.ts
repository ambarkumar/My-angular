import { Component } from '@angular/core';

import { Inject } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { NgbModal, NgbModalConfig} from '@ng-bootstrap/ng-bootstrap';
import { Router } from "@angular/router";
import { DOCUMENT } from '@angular/common';
import { ToastrService } from 'ngx-toastr';
import { AuthDetailService } from 'src/app/services/auth-detail.service';

@Component({
  selector: 'app-recover-password',
  templateUrl: './recover-password.component.html',
  styleUrls: ['./recover-password.component.scss']
})
export class RecoverPasswordComponent {

  public isCollapsed = false;
  active = 1;
  registerForm:FormGroup;
  loginForm:FormGroup;
  forgotForm:FormGroup;
  emailPattern:any = "^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$";
  standalone:boolean= true
  userData:any = [];
  loginShow:boolean= true;
  forgotShow:boolean= false;
  type: any;
  iconShow:any= false;
  iconHide:any= true;
  msg:any;
  modalReference: any;
  constructor(private toastr: ToastrService, private authDetail: AuthDetailService, @Inject(DOCUMENT) document: Document, private fb:FormBuilder, config: NgbModalConfig, private modalService: NgbModal, private router: Router) { 
    
  this.registerForm= this.fb.group({
    firstName: ['',[Validators.required, Validators.minLength(2),
      Validators.pattern('^[_A-z0-9]*((-|s)*[_A-z0-9])*$')]],
    lastname: ['',[Validators.required]],
    mobilenumber: ['',[Validators.required, Validators.maxLength(10), Validators.pattern(/^[6-9]\d{9}$/)]],
    email: ['',[Validators.email, Validators.required,Validators.pattern(this.emailPattern) ]],
    password: ['',[Validators.required,Validators.minLength(6)]],
  });



  this.loginForm= this.fb.group({
    email: ['',[Validators.email, Validators.required,Validators.pattern(this.emailPattern),Validators.minLength(4) ]],
    password: ['',[Validators.required,Validators.minLength(6)]],
    
  });


  this.forgotForm= this.fb.group({
    email: ['',[Validators.email, Validators.required,Validators.pattern(this.emailPattern),Validators.minLength(4) ]],
  });


  config.backdrop = 'static';
  config.keyboard = false;

  }

  // ngOnInit() {
  //   this.msg = this.authDetail.getMsg();
  //   console.log(this.authDetail)
  // }


  onTabClick() {
    this.forgotShow= false;
    this.loginShow= true;
  }


change(data:any) {
  console.log(data);
}


  registerUser(){
    localStorage.setItem("userData", JSON.stringify(this.registerForm.value));
    this.userData = JSON.parse(localStorage.getItem('userData')!);
    this.router.navigate(['']);
  } 


  loginUser(){
    this.userData = JSON.parse(localStorage.getItem('userData')!);
    if(( this.userData.email === this.loginForm.controls['email'].value) && (this.userData.password === this.loginForm.controls['password'].value)){
      this.router.navigate(['']);
      this.modalService.dismissAll();
      this.toastr.success('Login Successful!', '');
    }else {
     this.toastr.error('Please Correct your Email id and Password', '');
    }
  }

  forgotUser(){
     this.toastr.success('Please check your email address', '');
     this.modalService.dismissAll();
   
  }

  open(content:any) {
		this.modalService.open(content);
	}

  forgot(){
    //console.log('forgot')
    this.loginShow= false;
    this.forgotShow= true;
  }

  backToLogin(){
    this.forgotShow= false;
    this.loginShow= true;
  }
  get firstName(){
    return this.registerForm.get('firstName')
  }

  get lastname(){
    return this.registerForm.get('lastname')
  }

  get mobilenumber(){
    return this.registerForm.get('mobilenumber')
  }

  get email(){
    return this.registerForm.get('email')
  }

  get password(){
    return this.registerForm.get('password')
  }
  get common(){
    return this.loginForm.controls
  }
  get commonEmail(){
    return this.forgotForm.controls
  }


  



 

  eyeButtonOpen(){
    const passwordT:any = document.getElementById("password");
    if(passwordT.type === (this.type="text")){
      passwordT.type = 'password';
      // (this.registerForm.get('password')?.value)
    }
    this.iconShow= false;
    this.iconHide= true;
  }

  eyeButtonClose(){
    const passwordT:any = document.getElementById("password");
    if(passwordT.type === (this.type="password")){
      passwordT.type = 'text';
      // (this.registerForm.get('password')?.value)
    }
    this.iconHide= false;
    this.iconShow= true;

  }
}
