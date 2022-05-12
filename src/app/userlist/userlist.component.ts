import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-userlist',
  templateUrl: './userlist.component.html',
  styleUrls: ['./userlist.component.css']
})
export class UserlistComponent implements OnInit {

  constructor(private http:HttpClient) {}
  ngOnInit(): void {
    this.getAllUseres();
  }
  userlist:any;
  getAllUseres()
  {
    const url="http://localhost:8000/user/list";
    this.http.get(url).subscribe((res)=>{
      this.userlist = res;
    },err=>{
    }
    )
  }
}