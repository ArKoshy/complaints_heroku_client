import { Component, OnInit } from '@angular/core';
import { Complaint } from '../Complaint';
import { NgForm } from '@angular/forms';
import { APIService } from '../api-service';


@Component({
  selector: 'app-submit',
  templateUrl: './submit.component.html',
  styleUrls: ['./submit.component.css']
})


export class SubmitComponent implements OnInit {

  submitted = false;
  respObj1: Complaint;

  complaint: Complaint = {
    keyID: null,
    userName: null,
    mobile: null,
    email: null,
    compType: null,
    descr: null,
    status: "Open",
    adminComment: null
  };

  respComplaint: any;
  navigationSubscription: any;


  complaintTypes = ['Road Repair', 'Building Repair', 'Waste Management',
    'Electricity', 'Water Works', 'Others']

  constructor(private apiService: APIService) {


  }

  ngOnInit() {
  }

  log(x) {
    console.log(x);
  }



  onSubmit(comp: Complaint): void {
    this.submitted = true;
    this.apiService.sendComplaint(comp).subscribe((response) => {
      this.respComplaint = response;
      this.complaint.keyID = this.respComplaint.docKey;
      

    });


  }



}

