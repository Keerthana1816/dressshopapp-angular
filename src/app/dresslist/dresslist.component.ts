import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';


@Component({
  selector: 'app-dresslist',
  templateUrl: './dresslist.component.html',
  styleUrls: ['./dresslist.component.css']
})
export class DresslistComponent implements OnInit {
  dressName!:any;
  brandName!:any;
  color!:any;
  size!:any;
  price!:any;
  dress!:any;
  dresslist:any;
  constructor(private http:HttpClient,private toastr:ToastrService ) {}
  ngOnInit(): void {
    this.getAllDresses();
  }
 
  getAllDresses()
  {
    const url="http://localhost:8000/dress/list";
    this.http.get(url).subscribe((res)=>{
      this.dresslist = res;
    },err=>{
    }
    )
  }
}
