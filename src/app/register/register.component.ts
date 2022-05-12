import { HttpClient } from '@angular/common/http';
import { ToastrService } from 'ngx-toastr';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  name!: string;
  email!: string;
  password!: string;
  mobileNumber!: string;
  role!: string;


  constructor(private http:HttpClient, private toastr:ToastrService){}

   

  ngOnInit(): void {
  }
  register() {
     const userObj={
      
        "name":this.name,
        "email":this.email,
        "password":this.password,
        "mobileNumber":this.mobileNumber,
        "role":"USER"
    
     };
     const url="http://localhost:8000/user/save";
     this.http.post(url,userObj).subscribe((res)=>{
       console.log(res);
       this.toastr.success("successfully Registered");
       window.location.href="http://localhost:4200/login"
     },(err)=>{
       console.log(err);
       this.toastr.error("Please re-enter your Details");
     })
  }
}