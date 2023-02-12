
export  interface bucketlistData {
        bucket_id: number;
        name: string;
        date_created: Date;
        date_updated: Date;
        items: itemData [];
      }


export interface itemData{
  item_id:  number;
  name: string;
  date_created: Date;
  date_updated: Date;
  
}