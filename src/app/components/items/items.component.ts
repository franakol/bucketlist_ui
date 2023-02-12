import { Component, OnInit } from '@angular/core';

import { ActivatedRoute, Router} from '@angular/router';
import { bucketlistData, itemData} from '../bucketlist/bucket';

@Component({
  selector: 'app-items',
  templateUrl: './items.component.html',
  styleUrls: ['./items.component.css']
})
export class ItemsComponent implements OnInit {
  bucketlist: bucketlistData = {
    bucket_id: 0,
    name: '',
    items: [],
    date_created: new Date(),
    date_updated: new Date()
  };
  
    bucketName: any;
    selectedBucketlistName!: string;
    itemName!: string;
p: string|number|undefined;

  constructor(private route: ActivatedRoute, private router: Router) { }

  ngOnInit() {
    this.selectedBucketlistName = this.route.snapshot.paramMap.get('name') || 'Default Value';
    const savedBucketlist = localStorage.getItem(this.selectedBucketlistName);
    if (savedBucketlist) {
      this.bucketlist = JSON.parse(savedBucketlist);
    } else {
      this.bucketlist.name = this.selectedBucketlistName;
    }
  
  }
  
  addItem(itemName: string) {
    const newItem: itemData = {
      item_id: Math.floor(Math.random() * 100), // generate a unique item_id
      name: itemName,
      date_created: new Date(),
      date_updated: new Date()
    };

    this.bucketlist.items.push(newItem);

    // save the updated bucketlist to local storage
    localStorage.setItem(this.bucketlist.name, JSON.stringify(this.bucketlist));
  }

   
    
}

