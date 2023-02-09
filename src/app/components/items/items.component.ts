import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormControl, Validators } from '@angular/forms';
import { ActivatedRoute, Router} from '@angular/router';

@Component({
  selector: 'app-items',
  templateUrl: './items.component.html',
  styleUrls: ['./items.component.css']
})
export class ItemsComponent implements OnInit {

    bucketlists: any;
    bucketName: any;
    bucketlist: any;
    selectedBucketlistName!: string;
    itemName!: string;

  constructor(private route: ActivatedRoute, private router: Router) { }

  ngOnInit() {
    this.selectedBucketlistName = this.route.snapshot.paramMap.get('name') || 'Default Value';
    this.itemName = this.route.snapshot.paramMap.get('itemName') || 'Add Item'


  }
  addItem(bucketlist: { name: any; }, itemName: any) {
    this.router.navigate(['/items', {name: bucketlist.name, itemName: itemName}]);
  }
  
 
    
}

