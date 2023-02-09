import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { bucketlistData } from '../components/bucketlist/bucket';


// interface Item{
//   item_id: number;
//   name: string
// }
// interface bucketlistData {
//   bucket_id: number;
//   name: string;
// }


@Injectable({
  providedIn: 'root'
})
export class BucketlistService {

  number = Math.floor(Math.random() * 99999);

  private bucketlists: bucketlistData[] = [];

  private selectedBucketlistName = new BehaviorSubject('');
  selectedBucketlistName$ = this.selectedBucketlistName.asObservable();


  constructor() { }

  setSelectedBucketlistName(name: string) {
    this.selectedBucketlistName.next(name);
  }

  createBucketlist(bucketlistData: bucketlistData) {
    this.bucketlists.push(bucketlistData);
    return true;
  }

  getBucketlists() {
    const bucketlistData = localStorage.getItem('bucketlistData') || '[]';
    this.bucketlists = JSON.parse(bucketlistData);
  
  }

  updateBucketlist(bucketlistData: bucketlistData, index: number): boolean {
    if (index >= 0 && index < this.bucketlists.length) {
      this.bucketlists[index] = bucketlistData;
      return true;
    }
    return false;
  }

  deleteBucketlist(index: number) {
    if (index >= 0 && index < this.bucketlists.length) {
      this.bucketlists.splice(index, 1);
      return true;
    }
    return false;
  }

  public getNumber() {
    console.log({number: this.number})
    return this.number;
  }

  // addItem(bucketlistId: number, item: any) {
  //   let bucketlist = this.bucketlists.find(bucketlist => bucketlist.id === bucketlistId);
  //   if (bucketlist) {
  //     if (!bucketlist.items) {
  //       bucketlist.items = [];
  //     }
  //     bucketlist.items.push(item);
  //     return true;
  //   }
  //   return false;
  // }

  // // updateItem(bucketlistId: number, itemId: number, updatedItem: Item) {
  // //   let bucketlist = this.bucketlists.find(bucketlist => bucketlist.id === bucketlistId);
  // //   if (bucketlist) {
  // //     let index = bucketlist.items.findIndex((item: Item) => item.id === itemId);
  // //     if (index !== -1) {
  // //       bucketlist.items[index] = updatedItem;
  // //     }
      
  // //   }
  // // }

  // // deleteItem(bucketlistId: number, itemId: number) {
  // //   let bucketlist = this.bucketlists.find(bucketlist => bucketlist.id === bucketlistId);
  // //   if (bucketlist) {
  // //     let index = bucketlist.items.findIndex((item: Item) => item.id === itemId);
  // //     if (index !== -1) {
  // //       bucketlist.items.splice(index, 1);
  //     }
  //   }
  // }
}