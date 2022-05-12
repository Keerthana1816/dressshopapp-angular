import { HttpClient } from '@angular/common/http';
import { ToastrService } from 'ngx-toastr';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-adminlogin',
  templateUrl: './adminlogin.component.html',
  styleUrls: ['./adminlogin.component.css']
})
export class AdminloginComponent implements OnInit {

  
  email!: string;
  password!: string;
  


  constructor(private http:HttpClient, private toastr:ToastrService){}
   

  ngOnInit(): void {
  }
  adminlogin() {
     const userObj={
      
       
        "email":this.email,
        "password":this.password
        
    
     };
     const url="http://localhost:8000/admin/login";
     this.http.post(url,userObj).subscribe((res)=>{
       console.log(res);
       localStorage.setItem("LOGGED_IN_ADMIN", JSON.stringify(res));
       localStorage.setItem("isLoggedIn", "true");
       this.toastr.success("login done successfully");
       window.location.href="dresslist"
     },(err)=>{
       console.log(err.error);
       this.toastr.error( err.error.message);
     })
  }
}