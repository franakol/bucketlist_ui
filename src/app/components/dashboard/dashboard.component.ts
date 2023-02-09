import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { BucketlistService } from 'src/app/services/bucketlist.service';
import { bucketlistData } from '../bucketlist/bucket';


@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit{
// Properties for storing bucketlists, selected bucketlist, and user data
  bucketlists: any;
  bucketlist: any;
  selectedBucketlist: any =[];
  p = 1;
  rows = [];
user: any;
  displayName: '' = "";


  constructor(private router: Router, private bucketlistService: BucketlistService) {

  }
  
  ngOnInit() {
    this.getBucketlists();
    
  }
// Method to retrieve the bucketlists data from local storage
  getBucketlists() {
    // Get the bucketlist data from local storage, or an empty array if none is found
    const bucketlistData = localStorage.getItem('bucketlistData') || '[]';
    this.bucketlists = JSON.parse(bucketlistData);
    console.log(this.bucketlists);
    
  }

// Method to delete a bucketlist
  deleteBucketlist(bucketlist: any) {
    // Find the index of the selected bucketlist
    const index = this.bucketlists.indexOf(bucketlist);
    // Remove the bucketlist from the bucketlists array
    this.bucketlists.splice(index, 1);
  }

// Method to update a bucketlist
  updateBucketlist(selectedBucketlist: { name: string; bucket_id: any; date_created: string; date_updated: string; items: never[]; }) {
    // Find the index of the selected bucketlist
    const index = this.bucketlists.indexOf((b: { bucket_id: any; }) => b.bucket_id === Number(selectedBucketlist.bucket_id));
    // Update the selected bucketlist with the new data and set the date updated to the current date
    this.bucketlists[index] = {
      ...selectedBucketlist,
      date_updated: new Date().toISOString()
    };
    // Store the updated bucketlists in local storage
    localStorage.setItem('bucketlistData', JSON.stringify(this.bucketlists));
    // Set the selected bucketlist property to the updated bucketlist
    this.selectedBucketlist = selectedBucketlist;
    // Get the popup container and set its display to "block"
    const popupContainer = document.getElementById('popupContainer');
    if (popupContainer) {
    popupContainer.style.display = 'block';
    }
  }
  
// Method to close the popup
  closePopup() {
    const popupContainer = document.getElementById('popupContainer');
    if (popupContainer) {
    popupContainer.style.display = 'none';
  }
  }
  saveBtn() {
    console.log("saveBtn method called");
    console.log("before update:", this.bucketlists);
    const inputElement = <HTMLInputElement>document.getElementById("bucketNameInput");
    if (this.selectedBucketlist) {
      this.selectedBucketlist.name = inputElement.value;
      const index = this.bucketlists.findIndex((bucketlist: { bucket_id: any; }) => bucketlist.bucket_id === this.selectedBucketlist.bucket_id);
      this.bucketlists[index] = this.selectedBucketlist;
      localStorage.setItem("bucketlistData", JSON.stringify(this.bucketlists));
      console.log("after update:", this.bucketlists);
    }
    this.closePopup();
  }

  addItem(bucketlist: bucketlistData) {
    // Display the first value 
    // this.displayName = this.bucketlists[0];
    // Route to the items page, passing the selected attribute as a parameter
    this.router.navigate(['/items', {name: bucketlist.name}]);
    }
  
  }

