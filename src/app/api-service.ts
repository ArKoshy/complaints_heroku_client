import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import 'rxjs/Rx';

@Injectable({
  providedIn: 'root'
})
export class APIService {
  constructor(private http: Http) { }
  getComplaint() {

    return this.http.get('https://abcdcomplaints.herokuapp.com/track');
  }

  sendComplaint(xx): any {
    return this.http.post('https://abcdcomplaints.herokuapp.com/submit', xx)
      .map(
        (response: Response) => response.json()
      );

  }
  getComplaintbyID(id) {
    return this.http.get('https://abcdcomplaints.herokuapp.com/track/' + id)
      .map(
        (resp: Response) => resp.json()
      );
  }

  updComplaint(yy): any {
    return this.http.put('https://abcdcomplaints.herokuapp.com/update', yy)
      .map(
        (response: Response) => response.json()
      );

  }

  delComplaint(id): any {
    return this.http.delete('https://abcdcomplaints.herokuapp.com/delete/' + id)
      .map(
        (response: Response) => response.json()
      );

  }

  getAllComplaints(): any {
    return this.http.get('https://abcdcomplaints.herokuapp.com/complaints')
      .map(
        (response: Response) => response.json()
      );

  }
}
