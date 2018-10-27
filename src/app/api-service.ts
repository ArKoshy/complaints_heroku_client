import { Injectable } from '@angular/core';
// import { HttpClient} from  '@angular/common/http';
import {Http,Response} from '@angular/http';
import 'rxjs/Rx';

@Injectable({
  providedIn: 'root'
})
export  class  APIService {
  constructor(private  http:  Http) {}
  getComplaint(){
      return  this.http.get('http://localhost:3000/track');
  }

  sendComplaint(xx): any{
    return  this.http.post('http://localhost:3000/submit',xx)
    .map(
      (response:Response) => response.json()
      );

  } 
  getComplaintbyID(id){
    return  this.http.get('http://localhost:3000/track/'+id)
    .map(
      (resp:Response) => resp.json()
      );
}

   updComplaint(yy): any{
     return this.http.put('http://localhost:3000/update',yy)
     .map(
      (response:Response) => response.json()
      );
     
   }

   delComplaint(id): any{
    return this.http.delete('http://localhost:3000/delete/'+id)
    .map(
     (response:Response) => response.json()
     );
    
  }
 
  getAllComplaints(): any{
    return this.http.get('http://localhost:3000/complaints')
    .map(
     (response:Response) => response.json()
     );
    
  }
}
