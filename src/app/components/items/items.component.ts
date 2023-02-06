import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormControl, Validators } from '@angular/forms';
import { Router, ActivatedRoute} from '@angular/router';
import validateForms from 'src/app/helpers/validateform';
import { itemData } from '../bucketlist/bucket';

@Component({
  selector: 'app-items',
  templateUrl: './items.component.html',
  styleUrls: ['./items.component.css']
})
export class ItemsComponent implements OnInit {
  title!: string;
  newItem!: string;
  bucketList: string[] = [];

  constructor(private route: ActivatedRoute) {}

  ngOnInit() {
    const bucketName = this.route.snapshot.paramMap.get('bucketName');
    this.title = bucketName ? bucketName : '';
    const storedList = localStorage.getItem(this.title);
    if (storedList) {
      this.bucketList = JSON.parse(storedList);
    }
  }

  addItem() {
    this.bucketList.push(this.newItem);
    localStorage.setItem(this.title, JSON.stringify(this.bucketList));
    this.newItem = '';
  }
}