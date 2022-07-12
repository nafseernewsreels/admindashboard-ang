import { Component, OnInit } from '@angular/core';
import { APIService } from 'src/services/API/api.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'admin-dashboard';
  constructor(private apiService : APIService){

  }
  ngOnInit(){
this.apiService.getData().subscribe((res) => {
  console.log("response", res)
},
(error)=> {
  console.log("error", error)
})
  }
}
