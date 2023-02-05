import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit{

  bucketlists: any;
  bucketlist: any;
  selectedBucketlist: any;


  constructor(private router: Router) {}

  ngOnInit() {
    this.getBucketlists();
  }

  getBucketlists() {
    const bucketlistData = localStorage.getItem('bucketlistData') || '[]';
    this.bucketlists = JSON.parse(bucketlistData);
    console.log(this.bucketlists);
  }

  deleteBucketlist(bucketlist: any) {
    const index = this.bucketlists.indexOf(bucketlist);
    this.bucketlists.splice(index, 1);
  }

  updateBucketlist(bucketlist: { name: string }) {
    this.selectedBucketlist = bucketlist;
    const popupContainer = document.getElementById('popupContainer');
    if (popupContainer) {
    popupContainer.style.display = 'block';
    }
    }

  closePopup() {
    const popupContainer = document.getElementById('popupContainer');
    if (popupContainer) {
    popupContainer.style.display = 'none';
  }
  }
  saveBtn() {
    const inputElement = <HTMLInputElement>document.getElementById('bucketNameInput');
    const index = this.bucketlists.indexOf(this.selectedBucketlist);
    this.bucketlists[index].name = inputElement.value;
    localStorage.setItem('bucketlistData', JSON.stringify(this.bucketlists));
    this.closePopup();
    }
  }

