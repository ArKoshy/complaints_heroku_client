import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { APIService } from '../api-service';
import { Complaint } from '../Complaint';

@Component({
  selector: 'app-track',
  templateUrl: './track.component.html',
  styleUrls: ['./track.component.css']
})

export class TrackComponent implements OnInit {
  trackStat = false;
  nonEditStat = true;
  delStat = false;
  submitted = false;
  noDataStat = true;
  trackID = null;
  trespComplaint: any;
  hideStat = false;
  complaintTypes = ['Road Repair', 'Building Repair', 'Waste Management',
    'Electricity', 'Water Works', 'Others'];
  private complaint: Complaint = {
    keyID: null,
    userName: null,
    mobile: null,
    email: null,
    compType: null,
    descr: null,
    status: null,
    adminComment: null
  };

  constructor(private apiService: APIService) {


  }

  ngOnInit() {
  }

  onTrack(trackID): void {
    this.trackStat = true;
    this.apiService.getComplaintbyID(trackID)
      .subscribe((resp) => {
        this.trespComplaint = resp;
        if (this.trespComplaint && this.trespComplaint.length > 0) {

          this.noDataStat = false;
          this.complaint.keyID = this.trespComplaint[0].docKey;
          this.complaint.userName = this.trespComplaint[0].userName;
          this.complaint.mobile = this.trespComplaint[0].mobile;
          this.complaint.email = this.trespComplaint[0].email;
          this.complaint.mobile = this.trespComplaint[0].mobile;
          this.complaint.status = this.trespComplaint[0].status;
          this.complaint.descr = this.trespComplaint[0].descr;
          this.complaint.compType = this.trespComplaint[0].compType;
          this.complaint.descr = this.trespComplaint[0].descr;

        };
      })

  }

  editComp(): void {
    this.nonEditStat = false;
    this.delStat = true;
  }

  onSave(): void {

    this.submitted = true;
    this.hideStat = true;
    this.apiService.updComplaint(this.complaint).subscribe((response) => {
      this.trespComplaint = response;

    });


  }

  delComp(): void {
    this.hideStat = true;
    this.apiService.delComplaint(this.complaint.keyID).subscribe((response) => {
      this.trespComplaint = response;
    });

  }

}