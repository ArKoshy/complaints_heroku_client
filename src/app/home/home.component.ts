import { Component, OnInit } from '@angular/core';
import { APIService } from '../api-service';
import {AccordionModule} from 'primeng/accordion';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
                 
})
export class HomeComponent implements OnInit {
  complaints:  Array<object> = [];
  
  constructor(private  apiService:  APIService) { }
   
  ngOnInit() {
    this.getComplaints();
  }

  
  public  getComplaints(){
    this.apiService.getAllComplaints().subscribe((data:  Array<object>) => {
        this.complaints  =  data;
        console.log(data);
    });
}



}
