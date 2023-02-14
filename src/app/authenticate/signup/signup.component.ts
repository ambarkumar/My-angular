import { Component } from '@angular/core';
import { Inject } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { NgbModal, NgbModalConfig} from '@ng-bootstrap/ng-bootstrap';
import { Router } from "@angular/router";
import { DOCUMENT } from '@angular/common';
import { ToastrService } from 'ngx-toastr';
import { AuthDetailService } from 'src/app/services/auth-detail.service';
import { User, UserInfo } from 'src/app/user';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss']
})
export class SignupComponent {
  tab: number = 2;

  user!: User;
  users: User[] = [];

  usersTyped: UserInfo[] = [];



  public isCollapsed = false;
  active = 1;
  registerForm:FormGroup;
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
  userss: any;
  constructor(private toastr: ToastrService, private authDetailService: AuthDetailService, @Inject(DOCUMENT) document: Document, private fb:FormBuilder, config: NgbModalConfig, private modalService: NgbModal, private router: Router) { 
    
  this.registerForm= this.fb.group({
    name: ['',[Validators.required, Validators.minLength(2),
      Validators.pattern('^[_A-z0-9]*((-|s)*[_A-z0-9])*$')]],
    // lastname: ['',[Validators.required]],
    // mobilenumber: ['',[Validators.required, Validators.maxLength(10), Validators.pattern(/^[6-9]\d{9}$/)]],
    //email: ['',[Validators.email, Validators.required,Validators.pattern(this.emailPattern) ]],
    // password: ['',[Validators.required,Validators.minLength(6)]],
  });





  config.backdrop = 'static';
  config.keyboard = false;

  }

  saveUser() {
    this.user = this.registerForm.value;
    this.authDetailService.saveUser(this.user).subscribe((response: any) => {
      console.log(response);

      this.users.push({ name: response.name});
    });
  }

  registerUser() {
    this.user = this.registerForm.value;
    this.authDetailService
      .saveUserTyped(this.user)
      .subscribe((response: UserInfo) => {
        console.log(response);

        this.users.push({ name: response.name});
        this.usersTyped.push({
          name: response.name,
      //job: response.job,
          id: response.id,
          createdAt: response.createdAt,
        });
      });
  }

  
  // ngOnInit():void  {
  //   this.authDetailService.saveUsers().subscribe(
  //   (response: { data: any; }) => { this.userss = response.data;},
  //   (error: any) => { console.log(error); });
  //   setTimeout(() =>{
  //     console.log(this.userss, 'dd');
  //   }, 1000);
  // }
  // ngOnInit() {
  //   this.msg = this.authDetail.getMsg();
  //   console.log(this.authDetail)
  // }

change(data:any) {
  console.log(data);
}


  // registerUser(){
  //   localStorage.setItem("userData", JSON.stringify(this.registerForm.value));
  //   let users = [{
  //     firstName: this.registerForm.value.firstName,
  //     lastname: this.registerForm.value.firstName,
  //     mobilenumber: this.registerForm.value.firstName,
  //     email: this.registerForm.value.firstName
  //   }];
    
  //   console.log(users);
  //   this.userData = users;
  //   this.toastr.success('Sign up Successfullly!', '');
  //   //this.router.navigate(['/app/profile-page']);
  // } 






  get name(){
    return this.registerForm.get('name')
  }

  // get lastname(){
  //   return this.registerForm.get('lastname')
  // }

  // get mobilenumber(){
  //   return this.registerForm.get('mobilenumber')
  // }

  // get email(){
  //   return this.registerForm.get('email')
  // }

  // get password(){
  //   return this.registerForm.get('password')
  // }



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
  ngOnInit(): void {}
}
